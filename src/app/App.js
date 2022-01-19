import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { useCookies } from 'react-cookie'
import { base, light, dark } from './themes'
import Nav from './components/Nav'
import Select from './components/Select'
import Button from './components/Button'

const themesMap = {
  light,
  dark,
}

// Creates a CSS reset and applies some basic styles to the document body
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

// The main component that will wrap our application
const Main = styled.main(
  ({ theme }) => `
  max-width ${theme.sizes.body};
  margin: 0 auto;
  padding: ${theme.space[4]};
`
)

// This React context will expose the users theme preference to the entire application
export const ThemePreferenceContext = React.createContext()

const App = ({ initialTheme = 'light' }) => {
  // Store the users theme preference in state
  const [currentTheme, setCurrentTheme] = useState(initialTheme)

  const [, setCookie] = useCookies()

  // Function to update the current theme in state, and also save to a cookie
  const setCurrentThemeAndSavePref = (theme) => {
    setCurrentTheme(theme)
    setCookie('themePreference', theme, {
      path: '/',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    })
  }

  const theme = { ...base, colors: themesMap[currentTheme] }

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ThemePreferenceContext.Provider
          value={{ currentTheme, setCurrentTheme: setCurrentThemeAndSavePref }}
        >
          <Nav />
          <Main>
            <h1 style={{ marginBottom: '32px' }}>
              React + styled-components themes demo
            </h1>
            <label style={{ display: 'block', marginBottom: '32px' }}>
              <p style={{ marginBottom: '8px' }}>Theme</p>
              <Select
                value={currentTheme}
                onChange={(e) => setCurrentThemeAndSavePref(e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </Select>
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '8px',
              }}
            >
              <Button>Primary button</Button>
              <Button secondary>Secondary button</Button>
            </div>
          </Main>
        </ThemePreferenceContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
