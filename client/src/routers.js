import React from 'react'
import { Route } from 'react-router'

import {
  demo1,
} from './src/index.js'

export default store => {
  return (
    <Route path="/" component={demo1}></Route>
  )
}

