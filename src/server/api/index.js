import * as express from 'express'
import bodyParser from 'body-parser'
import getPosts from './routes/posts.js'

export default function getApi () {

  const router = express.Router()

  router.use(bodyParser.json())

  // posts router
  router.use('/posts', getPosts())

  return router
}
