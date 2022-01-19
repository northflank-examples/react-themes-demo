import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledNav = styled.nav(
  ({ theme }) => `
  background-color: ${theme.colors.nav};
  border-bottom: 1px solid ${theme.colors.border};
  height: 60px;
`
)

const StyledInner = styled.div(
  ({ theme }) => `
    max-width: ${theme.sizes.body};
    margin: 0 auto;
    padding: 0 ${theme.space[4]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  `
)

const StyledLogo = styled.p(
  ({ theme }) => `
    font-weight: ${theme.fontWeights.mid};
    text-transform: uppercase;
  `
)

const Nav = () => (
  <StyledNav>
    <StyledInner>
      <StyledLogo>My app</StyledLogo>
      <Button>Button</Button>
    </StyledInner>
  </StyledNav>
)

export default Nav
