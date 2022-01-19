import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import App from './App'

const AppWithThemeCookie = () => {
  const [cookies] = useCookies()
  const { themePreference } = cookies
  return <App initialTheme={themePreference} />
}

ReactDOM.hydrate(
  <BrowserRouter>
    <AppWithThemeCookie />
  </BrowserRouter>,
  document.getElementById('root')
)
