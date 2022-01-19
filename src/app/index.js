import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import App from './App'

const AppWithThemeCookie = () => {
  const [cookies] = useCookies()
  const { themePreference, customTheme } = cookies
  return <App initialTheme={themePreference} initialCustomTheme={customTheme} />
}

ReactDOM.hydrate(
  <BrowserRouter>
    <AppWithThemeCookie />
  </BrowserRouter>,
  document.getElementById('root')
)
