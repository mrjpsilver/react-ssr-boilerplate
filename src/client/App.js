import React, { useState, useEffect } from 'react'
import { array } from 'prop-types'
import Header from '../components/Header/Header'
import { truncateText } from '../utils'
import './App.scss'

export default function App ({ initialData }) {
  const [posts, setPosts] = useState(initialData)

  return (
    <div className="container">
      <Header />
      {posts.length > 0 &&
        <ul>
          {posts.map(post =>
            <li key={post.id}>
              <h2>{ post.title }</h2>
              By <em>{ post.author }</em>
              <p>{ truncateText(post.body, 300) }</p>
            </li>
          )}
        </ul>
      }
    </div>
  )
}

App.propTypes= {
  initialData: array.isRequired
}
