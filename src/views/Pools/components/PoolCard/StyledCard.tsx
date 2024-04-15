import styled from 'styled-components'
import { Card } from '@goosebumps/uikit'

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  background: none;
  max-width: 352px;
  margin: 0 8px 24px;
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }
`

export default StyledCard
