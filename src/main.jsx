import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import { TodoApp } from './components/08-useReducer/TodoApp'

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
)

//import './components/08-useReducer/intro-reducer';