import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    console.log(this.state)
  }

  componentDidUpdate () {
    console.log('U', this.state)
  }

  render () {
    return (
      <div>
        <h1>{JSON.stringify(this.state.data)}</h1>
      </div>
    )
  }
}

export default TodoList
