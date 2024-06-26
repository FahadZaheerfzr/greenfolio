import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
// import { abi as IGoosebumpsRouterABI } from '@goosebumps/goosebumps-aggregator-dex/artifacts/contracts/GoosebumpsRouter.sol/GoosebumpsRouter.json'
import { abi as IGoosebumpsRouterABI } from '@goosebumps/goosebumps-v1-aggregator-dex/artifacts/contracts/GooseBumpsSwapRouter02.sol/GooseBumpsSwapRouter02.json'
import { abi as IManageABI } from '@goosebumps/goosebumps-v1-aggregator-dex/artifacts/contracts/DEXManagement.sol/DEXManagement.json'
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHER } from '@goosebumps/zx-sdk'
import { ROUTER_ADDRESS, MANAGE_ADDRESS } from '../config/constants'
import { BASE_BSC_SCAN_URLS } from '../config'
import { TokenAddressMap } from '../state/lists/hooks'
import { getSimpleRpcProvider /* , simpleRpcProvider */ } from './providers'
import { getChainId } from './getChainId'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function getBscScanLink(
  data: string | number,
  type: 'transaction' | 'token' | 'address' | 'block' | 'countdown',
  chainId: ChainId = ChainId.MAINNET,
): string {
  switch (type) {
    case 'transaction': {
      return `${BASE_BSC_SCAN_URLS[chainId]}/tx/${data}`
    }
    case 'token': {
      return `${BASE_BSC_SCAN_URLS[chainId]}/token/${data}`
    }
    case 'block': {
      return `${BASE_BSC_SCAN_URLS[chainId]}/block/${data}`
    }
    case 'countdown': {
      return `${BASE_BSC_SCAN_URLS[chainId]}/block/countdown/${data}`
    }
    default: {
      return `${BASE_BSC_SCAN_URLS[chainId]}/address/${data}`
    }
  }
}

export function getBscScanLinkForNft(
  collectionAddress: string,
  tokenId: string,
  chainId: ChainId = ChainId.MAINNET,
): string {
  return `${BASE_BSC_SCAN_URLS[chainId]}/token/${collectionAddress}?a=${tokenId}`
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000)),
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, signer?: ethers.Signer | ethers.providers.Provider): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, signer ?? getSimpleRpcProvider(getChainId()))
}

// account is optional
export function getRouterContract(chainId: number, library: Web3Provider, account?: string): Contract {
  return getContract(ROUTER_ADDRESS[chainId], IGoosebumpsRouterABI, getProviderOrSigner(library, account))
}

// account is optional
export function getManageContract(chainId: number, library: Web3Provider, account?: string): Contract {
  return getContract(MANAGE_ADDRESS[chainId], IManageABI, getProviderOrSigner(library, account))
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}

export function isSupportedChain(chain: string): boolean {
  const supportedChains = ["ethereum", "bsc", "polygon", "bsc_testnet"];
  return supportedChains.find((supported) => supported === chain) !== undefined;
}

export function getErrorMessage(error) {
  if (error === undefined) {
    return ''
  }
  if (typeof error === 'string') {
    return error
  }
  return error.message
}

export const METAMASK_MAX_TOKEN_SYMBOL_LENGTH = 11