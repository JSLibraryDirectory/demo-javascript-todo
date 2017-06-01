import React, { Component } from 'react'

import Page from '../components/page'
import Header from '../components/header'
import TodoList from '../components/todolist'
import Edit from '../components/edit'

import {observeTodos} from '../lib/observe-todos'
import updateTodo from '../lib/update-todo'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      editing: null,
    }
  }
  
  componentDidMount() {
    this.todos = observeTodos(todos => this.setState({ todos }))
  }

  componentWillUnmount() {
    this.todos.unsubscribe()
  }

  handleCheckboxClick = async (id, completed) => {
    await updateTodo(id, { completed: !completed })
  }

  handleTodoClick = id => {
    this.setState({ editing: id, })
  }
  
  render() {
    const { todos, editing } = this.state
    return (
      <Page heading="Tasks">
        <TodoList todos={todos} onCheckboxClick={this.handleCheckboxClick} onTodoClick={this.handleTodoClick} />
      </Page>
    )
  }
}
