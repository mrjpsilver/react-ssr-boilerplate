import React from 'react'
import './Header.scss'

export default function Header () {
  return (
    <header className="hero">
      <div className="flex">
        <img src="logo-rainbow192.png" />
        <div>
          <h1>Hello from Express</h1>
          <p>The list below is retrieved asynchronously from a local JSON file. To view the API endpoint which serves this data, visit <a href="http://localhost:8080/api/posts">http://localhost:8080/api/posts</a>.</p>
        </div>
      </div>
      
    </header>
  )
}
