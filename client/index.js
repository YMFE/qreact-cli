import './index.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import {
  index,
  demo1,
  demo2,
  demo3,
} from './src/index.js'
const container = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={index}>3243212
      <Route path="/demo1" component={demo1}></Route>
      <Route path="/demo2" component={demo2}></Route>
      <Route path="/demo3" component={demo3}></Route>
    </Route>
  </Router>,
  container
)