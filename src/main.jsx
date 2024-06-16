import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './api/server'

import store from './store'

console.log('initial state: ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log("new state: ", store.getState())
})

store.dispatch({ type: 'todos/todoAdded', payload: 'Learning big things' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learning again' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learning super duper' })

unsubscribe()

store.dispatch({ type: 'todos/todoAdded', payload: 'Learning super duper' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
