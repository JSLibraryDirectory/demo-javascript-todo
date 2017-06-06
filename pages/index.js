import React, { Component } from 'react'

import Page from '../components/page'
import Header from '../components/header'
import TodoList from '../components/todolist'

import { observeTodos } from '../lib/observe-todos'
import updateTodo from '../lib/update-todo'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.todos = observeTodos(todos => this.setState({ todos }))
  }

  componentWillUnmount() {
    this.todos.unsubscribe()
  }

  handleCheckboxClick = async (id, done) => {
    this.setState(prev => ({
      todos: prev.todos.map(todo => {
        todo.body = todo.id === id
          ? { ...todo.body, done: !done }
          : todo.body
        return todo
      })
    }))
    await updateTodo(id, { done: !done })
  }

  render() {
    const { todos } = this.state

    return (
      <Page heading="Tasks" canSort>
        <TodoList todos={todos} onCheckboxClick={this.handleCheckboxClick} />
      </Page>
    )
  }
}
