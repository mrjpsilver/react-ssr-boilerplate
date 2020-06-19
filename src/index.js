import React from 'react'
import { hydrate } from 'react-dom'
import App from './client/App'
import './index.scss'

hydrate(
  <App />,
  document.getElementById('rootNode'),
)
