import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'
import getApi from './api'
import config from '../../config'

const server = express()
server.use(express.static('public'))

server.get('^/$', (req, res) => {
  const initialMarkup = renderToString(<App />);
  res.send(`
    <html>
      <head>
        <title>React SSR Boilerplate</title>
        <link rel="stylesheet" href="main.css">
      </head>
      <body>
        <div id="rootNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
})

server.use('/api', getApi())

server.listen(config.port, () => console.log(`Server listening on port: ${config.port}`))
