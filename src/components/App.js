import React, { useState } from 'react'
import Header from './Header/Header'
import data from '../data/testData.js'
import './App.scss'

export default function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      {data.posts.length > 0 &&
        <ul>
          {data.posts.map(post =>
            <li key={post.id}>{ post.title }</li>
          )}
        </ul>
      }
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
