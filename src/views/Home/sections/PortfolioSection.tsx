import { Box, Button, Flex } from '@goosebumps/uikit'
import React from 'react'
import styled from 'styled-components'
import HomePageText from '../home.json'

const SectionContainer = styled.div`
background-color: #0A1517;
border-bottom: 1px solid #FFFFFF;
border-top: 1px solid #FFFFFF;
 
`

const ContentConainter = styled(Flex)`
  color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: auto;
  max-width: 1200px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`

const TitleDiv = styled.div`

  font-size: 28px;
  line-height: 1.2;
  margin-bottom: 25px;

  ${({ theme }) => theme.mediaQueries.md} {
    // max-width: 620px;
    font-size: 48px;
  }
`

const AbstractDiv = styled.div`
  font-size: 16px;
  line-height: 27px;
  font-weight: 500;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 17px;
  }
`

const PortfolioSection = () => {
  const styles = {
    title: {
      fontSize: '48px',
      marginBottom: '25px',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    description: {
      fontSize: '14px',
      lineHeight: '27px',
    },
  }
  return (
    <SectionContainer>
      <ContentConainter flexDirection={['column', 'column', 'column', 'column', 'row']} alignItems="center">
        <Flex flex={1} alignItems={['center', 'center', 'center', 'center', 'flex-end']}>
          <img src="/images/goosebumps/2portfolio.png" alt="portfolio tracker" />
        </Flex>
        <Flex flexDirection="column" flex={1} p="30px"  style={{ maxWidth: '620px', gap:"20px" }}>
          <TitleDiv>
            {HomePageText.section2.title}
            {/* <div style={{ fontWeight: "bold", ...styles.title}}>{HomePageText.section2.title}</div> */}
          </TitleDiv>
          <AbstractDiv>{HomePageText.section2.abstract}</AbstractDiv>
          <div >
            <h5 style={styles.subtitle}>{HomePageText.section2.subtitle1}</h5>
            <p style={styles.description}>{HomePageText.section2.description1}</p>
          </div>
          <div >
           
            <h5 style={styles.subtitle}>{HomePageText.section2.subtitle2}</h5>
            <p style={styles.description}>{HomePageText.section2.description2}</p>
          </div>
        </Flex>
      </ContentConainter>
    </SectionContainer>
  )
}

export default PortfolioSection
