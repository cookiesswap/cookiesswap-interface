import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId={2}>Home</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId={2}>Farming</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId={4}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://info.cookiesswap.org/token/0x030839000f297a1471f83b568eeb51c10afeeefe">
        Chart
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
        Launchpad
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://drive.google.com/file/d/1nddkZoIxmsP0FdWAo5M81ZoKBgubYRyw/view">
        Whitepaper
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
  color: #F9B234;
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
