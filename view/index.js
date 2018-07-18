import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoList from './components/todoList'

render(
  <App />,
  document.getElementById('root')
)

class App extends Component {
  render () {
    return (
      <div>
        <h1>hello world!!!</h1>
        <TodoList />
      </div>
    )
  }
}
