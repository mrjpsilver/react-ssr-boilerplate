import React from 'react'
import { hydrate } from 'react-dom'
import App from './client/App'
import PostService from './services/http/Posts.service'
import './index.scss'

const postService = new PostService()

postService.getAll().then(data => {
  hydrate(
    <App initialData={data.posts} />,
    document.getElementById('rootNode'),
  )
})
.catch(err => {
  console.warn(err)
})

