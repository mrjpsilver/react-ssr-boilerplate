import * as express from 'express'
import data from '../../../data/testData.js'

// api/posts

export default function getPosts () {
  const router = express.Router()

  router.get('/', (req, res) => {
    res.status(200)
    res.json(data)
  })

  return router
}
