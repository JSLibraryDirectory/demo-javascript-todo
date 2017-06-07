import React, { Component } from 'react'

import Page from '../components/page'
import Header from '../components/header'
import TodoList from '../components/todolist'

import observeTodos from '../lib/observe-todos'
import updateTodo from '../lib/update-todo'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    try {
      this.todos = observeTodos({}, todos => this.setState({ todos }))
    } catch (err) {
      console.log(err)
    }
  }

  componentWillUnmount() {
    this.todos.unsubscribe()
  }

  handleQueryUpdate = query => {
    this.todos.unsubscribe()
    try {
      this.todos = observeTodos(query, todos => this.setState({ todos }))
    } catch (err) {
      console.log(err)
    }
  }

  handleCheckboxClick = async (id, done) => {
    this.setState(prev => ({
      todos: prev.todos.map(todo => {
        if (todo.id === id) {
          todo.body.done = !todo.body.done
        }
        return todo
      })
    }))

    await updateTodo(id, { done: !done })
  }

  render() {
    const { todos } = this.state
    return (
      <Page heading="Tasks" onQueryUpdate={this.handleQueryUpdate}>
        <TodoList todos={todos} onCheckboxClick={this.handleCheckboxClick} />
      </Page>
    )
  }
}
