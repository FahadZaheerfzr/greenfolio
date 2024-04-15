import { Button, Flex } from '@goosebumps/uikit'
import React from 'react'
import styled from 'styled-components'
import HomePageText from '../home.json'

const ChartSection = () => {
  return (
    <div className="wrap-bg">
      <div
        className="manage-area  "
        style={{ borderBottom: '1px solid white', paddingBottom: '80px', paddingTop: '80px' }}
      >
        <div className="container ">
          <div className="section-title">
            <h2>A single dashboard for your portfolio</h2>
            <p>
              If you&apos;re fed up with using five different platforms to monitor your crypto investments, then
              it&apos;s time to get acquainted with Greenfolio
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="manage-content">
                <ul>
                  <li>
                    <h3 className="chartSection-div">
                      <img src="/coin.svg" alt="coin" />A single dashboard for everything in your portfolio
                    </h3>
                    <p>
                      We empower you to invest in cryptocurrencies without any risk, hassle, and with minimal technical
                      knowledge required.
                    </p>
                  </li>
                  <li>
                    <h3 className="chartSection-div">
                      <img src="/bulb.svg" alt="bulb" />A platform designed specifically for you
                    </h3>
                    <p>
                      Whether you&apos;re new to trading or an experienced pro, Greenfolio offers tools customized to
                      meet your requirements. Keep track of all your trades with features such as portfolio management,
                      news feed, alerts, and more!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="manage-img ml-15">
                <img src="/manage.svg" alt="" style={{ marginBottom: '40px' }} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="manage-content">
                <ul>
                  <li>
                    <h3 className="chartSection-div">
                      <img src="/bulb.svg" alt="bulb" />
                      Ease of mind through security
                    </h3>
                    <p>
                      We ensure the safety of your data, eliminating concerns about breaches or hacks. The best part?
                      You can use the app without worry, and it won&apos;t cost you a thing!
                    </p>
                  </li>
                  <li>
                    <h3 className="chartSection-div">
                      <img src="/coin.svg" alt="bulb" />
                      An app that looks fantastic on any screen size
                    </h3>

                    <p>
                      Greenfolio is created to make the most of today&apos;s screens, whether big or small. This way,
                      you can trade without overlooking any crucial market updates thanks to our app&apos;s
                      responsiveness.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="dex"
        className="dex-area"
        style={{ borderBottom: '1px solid white', paddingBottom: '80px', paddingTop: '80px' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Dex</h2>
            <p>Greenfolio supports over 1000 cryptocurrencies across different chains!</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-dex">
                <img src="/images/home2.0/exchange.svg" alt="exchange" />
                <h3>Exchange and Contribute Liquidity</h3>
                <p>
                  Effortlessly trade your favorite cryptocurrencies and contribute easily to liquidity pools with
                  Greenfolio. Whether you&apos;re an experienced trader or just getting started, our user-friendly
                  interface ensures a smooth experience.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-dex">
                <img src="/images/home2.0/swap.svg" alt="swap" />
                <h3>Swap Across Blockchains</h3>
                <p>
                  Greenfolio smart contract lets you exchange tokens between two different blockchain systems. It allows
                  direct token swaps on an alternative blockchain without requiring a middleman or central authority.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-dex">
                <img src="/images/home2.0/staking.svg" alt="staking" />
                <h3>Staking pools </h3>
                <p>
                  As a user of Greenfolio, you will get access to different staking pools, meaning you can make earnings
                  by staking your tokens in any available pools on the Greenfolio platform. You will have the chance to
                  choose which staking pool you want to stake, select preferred crypto pools and also APY.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-dex">
                <img src="/images/home2.0/farming.svg" alt="farming" />
                <h3>Farming pools</h3>
                <p>
                  These pools power a marketplace where individuals can lend or borrow tokens, maximizing returns
                  through DeFi. Users incur fees for utilization, which are then used to reward liquidity providers
                  staking their tokens in the pool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio-tracker" className="d-flex portfolio-tracker-area" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="portfolio-tracker-img">
                <img src="images/goosebumps/3portfolio-tracker-img.png" alt="goosebumps" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="chart-content">
                <h2>Get a bird&apos;s eye view of your investments</h2>
                <h4>
                  Using Greenfolio is an easy way to track your assets across different wallets. Watch the prices change
                  in real-time, and get alerts when they change color!
                </h4>
                <ul>
                  <li className="d-flex align-items-start">
                    <img src="/images/home2.0/check-icon.svg" alt="check-icon" />
                    <h6>Keep an eye on your investments</h6>
                  </li>
                  <p style={{ fontSize: '14px' }}>
                    We aim to provide you with a unified view of your portfolios across various wallets. Monitor
                    real-time price changes, and receive alerts when they shift.
                  </p>

                  <li className="d-flex align-items-start">
                    <img src="/images/home2.0/check-icon.svg" alt="check-icon" />
                    <h6>Monitor all your coins together</h6>
                  </li>
                  <p style={{ fontSize: '14px' }}>
                    Keep tabs on coins from various wallets on different chains. View the price history of each coin in
                    a single dashboard for convenient tracking
                  </p>

                  <li className="d-flex align-items-start">
                    <img src="/images/home2.0/check-icon.svg" alt="check-icon" />
                    <h6>No more headaches, no more stress!</h6>
                  </li>
                  <p style={{ fontSize: '14px' }}>
                    Greenfolio eliminates the hassle of checking numerous wallets for new transactions. Monitor all your
                    wallets in one location for a simpler and stress-free experience!
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="charts" className="chart-area " style={{ borderBottom: '1px solid #FFFFFF', paddingBottom: '20px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="portfolio-tracker-content ml-15">
                <h2>{HomePageText.section6.title}</h2>
                <p>{HomePageText.section6.abstract}</p>

                <ul>
                  <li className="d-flex align-items-start align-items-center">
                    <img src="/images/home2.0/noti-icon.png" alt="icon" style={{ mixBlendMode: 'luminosity' }} />
                    <div>
                      <h4 style={{ fontSize: '24px' }}>{HomePageText.section6.subtitle1}</h4>
                      <p style={{ fontSize: '16px' }}>{HomePageText.section6.description1}</p>
                    </div>
                  </li>
                  {/* <li className="d-flex align-items-start align-items-center">
                      <img src="/images/goosebumps/src-icon.png" alt="goosebumps" />
                      <p>Each chart will have a trade history just like Poocoin and Bogged charts</p>
                    </li> */}
                  <li className="d-flex align-items-start align-items-center">
                    <img src="/images/home2.0/pai-icon.png" alt="icon" style={{ mixBlendMode: 'luminosity' }} />
                    <div>
                      <h4 className="" style={{ fontSize: '24px' }}>
                        Indicators for user activity
                      </h4>
                      <p style={{ fontSize: '16px' }}>
                        Don&apos;t get lost and keep track of your trading activity, anytime, anywhere.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="chart-img ml-15">
                <img src="/images/goosebumps/3chart-img.png" alt="goosebumps" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex aligh-items-center partner-area " >
        <div>
          <img src="/images/home2.0/roburna-blockchain.svg" alt="partner-logo" />
        </div>
        <div>
          <img src="/images/home2.0/roburna-labs.svg" alt="partner-logo" />
        </div>

        <div>
          <img src="/images/home2.0/partner.svg" alt="partner-logo" />
        </div>
      </div>
    </div>
  )
}

export default ChartSection
