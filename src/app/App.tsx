import * as React from 'react'
import { render } from 'react-dom'

import Body from './components/Body'

import './global.css'

render(
  <Body />,
  document.getElementById('root')
)

// (TypeScript) Allow use of hot() on module, below
declare let module: any

// Allow hot module reloading on saving changes
if (process.env.NODE_ENV !== 'production' && module.hot) {
  console.log('hot')
  module.hot.accept()
}