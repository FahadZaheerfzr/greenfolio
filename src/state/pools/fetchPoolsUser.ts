import { LOG_VIEW } from 'config'
// import poolsConfig from 'config/constants/pools'
import { newpools } from 'config/constants/pools'
// import sousChefABI from 'config/abi/sousChef.json'
import stakingABI from 'config/abi/staking.json'
import erc20ABI from 'config/abi/erc20.json'
import { getAddress } from 'utils/addressHelpers'
// import { getMasterchefContract } from 'utils/contractHelpers'
import multicall from 'utils/multicall'
// import { simpleRpcProvider } from 'utils/providers'
import BigNumber from 'bignumber.js'

const poolsConfig = newpools

// Pool 0, Cake / Cake is a different kind of contract (master chef)
// BNB pools use the native BNB token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter((pool) => pool.stakingToken.symbol !== 'BNB')
// const bnbPools = poolsConfig.filter((pool) => pool.stakingToken.symbol === 'BNB')
const nonMasterPools = poolsConfig.filter((pool) => pool.sousId !== 0)
// const masterChefContract = getMasterchefContract()

export const fetchPoolsAllowance = async (account) => {
  const calls = nonBnbPools.map((pool) => ({
    address: pool.stakingToken.address,
    name: 'allowance',
    params: [account, getAddress(pool.approveAddresses)],
  }))
  // LOG_VIEW("test= fetchPoolsAllowance calls=", calls)
  nonBnbPools.map((pool) => {
    // LOG_VIEW("test= fetchPoolsAllowance pool.address=", pool.stakingToken.address)
    return {address: pool.stakingToken.address}
  })
  const allowances = await multicall(erc20ABI, calls)
  // LOG_VIEW("test= multicall allowances=", allowances)
  return nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  // Non BNB pools
  const calls = nonBnbPools.map((pool) => ({
    address: pool.stakingToken.address,
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  // BNB pools
  // const bnbBalance = await simpleRpcProvider.getBalance(account)
  // const bnbBalances = bnbPools.reduce(
  //   (acc, pool) => ({ ...acc, [pool.sousId]: new BigNumber(bnbBalance.toString()).toJSON() }),
  //   {},
  // )

  // return { ...tokenBalances, ...bnbBalances }
  return { ...tokenBalances }
}

export const fetchUserStakeBalances = async (account) => {
  // const calls = nonMasterPools.map((p) => ({
  //   address: getAddress(p.contractAddress),
  //   name: 'userInfo',
  //   params: [account],
  // }))

  // const userInfo = await multicall(sousChefABI, calls)

  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'staker',
    params: [account],
  }))

  const userInfo = await multicall(stakingABI, calls)

  const stakedBalances = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  // Cake / Cake pool
  // const { amount: masterPoolAmount } = await masterChefContract.userInfo('0', account)

  // return { ...stakedBalances, 0: new BigNumber(masterPoolAmount.toString()).toJSON() }
  return { ...stakedBalances }
}

export const fetchUserPendingRewards = async (account) => {
  // const calls = nonMasterPools.map((p) => ({
  //   address: getAddress(p.contractAddress),
  //   name: 'pendingReward',
  //   params: [account],
  // }))
  // const res = await multicall(sousChefABI, calls)

  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'getTotalRewards',
    params: [account],
  }))
  const res = await multicall(stakingABI, calls)

  const pendingRewards = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )

  // Cake / Cake pool
  // const pendingReward = await masterChefContract.pendingCake('0', account)

  // return { ...pendingRewards, 0: new BigNumber(pendingReward.toString()).toJSON() }
  return { ...pendingRewards }
}
