import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { base, light, dark } from './themes'

const themesMap = {
  light: light,
  dark: dark,
}

const GlobalStyle = createGlobalStyle(
  ({ theme: { fonts, colors, lineHeights } }) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${colors.background};
    color: ${colors.text};
    font-family: ${fonts.body};
    line-height: ${lineHeights.body};
  }
  a, a:visited {
    color: ${colors.primary};
  }
`
)

const Main = styled.main(
  ({ theme }) => `
  max-width ${theme.sizes.body};
  margin: 0 auto;
  padding: ${theme.space[4]};
`
)

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    console.log('Hello from the browser!')
  }, [])

  const theme = { ...base, colors: themesMap[currentTheme] }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <h1>React + styled-components themes demo</h1>
      </Main>
    </ThemeProvider>
  )
}

export default App
