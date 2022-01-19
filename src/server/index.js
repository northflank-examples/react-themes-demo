import express from 'express'
import cookieParser from 'cookie-parser'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from '../app/App'

const app = express()

app.use(cookieParser())
app.use(express.static('dist'))

app.get('*', (req, res) => {
  const { themePreference, customTheme } = req.cookies
  let app = ''
  let styles = ''
  const sheet = new ServerStyleSheet()
  try {
    app = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url}>
          <App
            initialTheme={themePreference}
            initialCustomTheme={JSON.parse(customTheme)}
          />
        </StaticRouter>
      )
    )
    styles = sheet.getStyleTags()
  } catch (e) {
    console.error(e)
  } finally {
    sheet.seal()
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>react-themes-demo</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>" />
        <script src="/app.js" async defer></script>
        ${styles}
      </head>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>`

  res.send(html)
})

app.listen(9000, () => {
  console.log('React app running at http://localhost:9000 🚀')
})
