import React, { Component } from 'react'
import TodoList from './components/todoList'
import fetch from 'isomorphic-fetch'

export default class App extends Component {
  constructor (props) {
    super(props)
    if (props.initialData) {
      this.state = props.initialData
      console.log('AS', this.state)
    } else {
      this.state = JSON.parse(window.__initialData__)
      delete window.__initialData__
    }
  }

  componentWillMount () {
    fetch('http://127.0.0.1:8000/api/')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
  }

  render () {
    return (
      <div>
        <nav className='nav'>
          <h1 className='txt-1'>Todo!!!</h1>
        </nav>
        <main className='container'>
          <TodoList data={this.state} />
        </main>
      </div>
    )
  }
}
