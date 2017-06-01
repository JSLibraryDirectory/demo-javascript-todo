import React, { Component } from 'react'

import Input from '../components/input'
import Page from '../components/page'
import Link from '../components/link'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render () {
    const { title, description } = this.state
    return (
      <Page heading="Create a task">
        <Input
          placeholder='Title'
          value={title}
          onChange={this.handleInputChange}
          name='title' />
        <Input
          placeholder='Description'
          value={description}
          onChange={this.handleInputChange}
          name='description' />
        <Link href="/" inverted>
          Cancel
        </Link>
        <Link href="/" >
          Save
        </Link>
      </Page>
    )
  }
}
