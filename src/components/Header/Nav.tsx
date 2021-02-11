import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://pancakeswap.finance/farms">
        <TranslatedText translationId={2}>Farm Cake</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/staking">
        <TranslatedText translationId={4}>Staking Cake</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.info">
        Analytics
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://github.com/retjehnetwork/telesc">
        Airdrop
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://github.com/retjehnetwork/listing-BEP20/blob/master/readme.md">
        Listing
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
