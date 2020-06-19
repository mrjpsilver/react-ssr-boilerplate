import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'
import getApi from './api'
import PostService from '../services/http/Posts.service'
import config from '../../config'

const server = express()
server.use(express.static('public'))

server.get('^/$', (req, res) => {
  const postService = new PostService()
  postService.getAll().then(data => {
    const initialMarkup = renderToString(<App initialData={data.posts} />);
    res.send(`
      <html>
        <head>
          <title>React SSR Boilerplate</title>
          <link rel="stylesheet" href="main.css" />
          <link rel="icon" type="image/png" href="/logo-rainbow192.png" />
        </head>
        <body>
          <div id="rootNode">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
    `)
  })
  .catch(err => {
    console.warn(err)
  })
})

server.use('/api', getApi())

server.listen(config, () => console.log(`Server listening on port: ${config.port}`))
