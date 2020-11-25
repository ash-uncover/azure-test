import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import './i18n'

import App from 'components/App'

console.log(process.env.MY_ENV_VARIABLE)

ReactDOM.render(
  <Router hashType='noslash'>
    <App />
  </Router>,
  document.getElementById('react-root')
)
