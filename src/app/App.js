import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { useCookies } from 'react-cookie'
import { base, light, dark, solarized } from './themes'
import Nav from './components/Nav'
import Select from './components/Select'
import Button from './components/Button'
import ExampleUi from './components/ExampleUi'

const themesMap = {
  light,
  dark,
  solarized,
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

const App = ({ initialTheme = 'light', initialCustomTheme = {} }) => {
  // Store the users theme preference in state
  const [currentTheme, setCurrentTheme] = useState(initialTheme)
  const [customTheme, setCustomTheme] = useState(initialCustomTheme)

  const [cookies, setCookie] = useCookies()
  const { themePreference } = cookies

  // Function to update the current theme in state, and also save to a cookie
  const setCurrentThemeAndSavePref = (theme) => {
    setCurrentTheme(theme)
    setCookie('themePreference', theme, {
      path: '/',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    })
  }

  // Function to update the current custom theme values in state, and also save to a cookie
  const saveCustomTheme = (theme) => {
    setCustomTheme(theme)
    setCookie('customTheme', JSON.stringify(theme), {
      path: '/',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    })
  }

  // Use the prefers-color-scheme media query to detect OS theme preference
  useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
    // If the user has not set a preference yet, set to their OS theme
    if (!themePreference)
      setCurrentThemeAndSavePref(themeQuery.matches ? 'light' : 'dark')
    // If the user is using a theme other than light/dark, don't change it based on their OS
    if (initialTheme === 'light' || initialTheme === 'dark') {
      themeQuery.addEventListener('change', ({ matches }) => {
        setCurrentThemeAndSavePref(matches ? 'light' : 'dark')
      })
    }
  }, [])

  // Build our full theme object from the base properties + our current theme colours
  const theme = {
    ...base,
    colors:
      currentTheme === 'custom'
        ? Object.keys(customTheme).length
          ? customTheme
          : themesMap.light
        : themesMap[currentTheme],
  }

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
          value={{
            currentTheme,
            setCurrentTheme: setCurrentThemeAndSavePref,
            customTheme,
            setCustomTheme: saveCustomTheme,
          }}
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
                onChange={(e) => {
                  if (
                    e.target.value === 'custom' &&
                    !Object.keys(customTheme).length
                  )
                    setCustomTheme(themesMap['light'])
                  setCurrentThemeAndSavePref(e.target.value)
                }}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="solarized">Solarized</option>
                <option value="custom">Custom</option>
              </Select>
            </label>
            {currentTheme === 'custom' && (
              <>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridGap: '8px',
                    marginBottom: '32px',
                  }}
                >
                  {Object.entries(customTheme).map(([key, val]) => (
                    <label key={`custom-${key}`}>
                      <p style={{ marginBottom: '4px' }}>{key}</p>
                      <input
                        type="color"
                        value={val}
                        onChange={(e) => {
                          setCustomTheme((t) => {
                            const current = { ...t }
                            current[key] = e.target.value
                            return current
                          })
                        }}
                        style={{ display: 'block', width: '100%' }}
                      />
                    </label>
                  ))}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: '8px',
                    marginBottom: '32px',
                  }}
                >
                  <Button
                    onClick={() => {
                      saveCustomTheme(customTheme)
                      alert('Custom theme was saved')
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    secondary
                    onClick={() => {
                      saveCustomTheme(themesMap.light)
                      alert('Custom theme was reset to default')
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </>
            )}
            <ExampleUi />
          </Main>
        </ThemePreferenceContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
