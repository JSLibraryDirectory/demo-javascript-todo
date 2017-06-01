import React, { Component } from 'react'
import Router from 'next/router'

import Page from '../components/page'
import Link from '../components/link'
import Input from '../components/input'
import Select from '../components/select'
import TagPicker from '../components/tagPicker'
import Checkbox from '../components/checkbox'

import createTodo from '../lib/create-todo'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      priority: 'medium',
      tag: 'home',
      completed: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    
  }

  handleInputChange ({ target }) {
    console.log(target.name, target.value)
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [target.name]: value })
  }

  handleCreateClick = async ()  => {
    try {
      await createTodo({ ...this.state })
      console.log('success')
      Router.push('/')
    } catch (err) {
      console.log(err)      
    }
  }

  render () {
    const { title, description, priority, tag, completed } = this.state
    return (
      <Page heading='Create a task'>
        <div className='wrap'>
          <Input
            placeholder='Title'
            value={title}
            onChange={this.handleInputChange}
            name='title'
            margin='0 0 40px 0' />
          <Input
            placeholder='Description'
            value={description}
            onChange={this.handleInputChange}
            name='description'
            margin='0 0 40px 0' />
          <div className="column">
            <Select onChange={this.handleInputChange} selected={priority} options={['low', 'medium', 'high']} margin="0 120px 0 0" />
            <TagPicker onClick={value => this.handleInputChange({ target: { name: 'tag', value } })} selected={tag} />
          </div>
          <div className='bottom'>
            <div className="completed">
              <span>Completed</span>
              <Checkbox onChange={this.handleInputChange} checked={completed} />
            </div>
            <div>
            <Link href='/' inverted margin='0 30px 0 0'>
              Cancel
            </Link>
            <Link type="button" onClick={this.handleCreateClick}>
              Create
            </Link>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          .wrap {
            margin-top: 40px;
            margin-left: 60px;
            margin-right: 130px;
          }
          .column {
            display: flex;
            align-items: center;
          }
          .bottom {
            margin-top: 60px;
            padding: 60px 0;
            border-top: 1px solid #EEEBF3;
            display: flex;
            justify-content: space-between;
          }
          .completed {
            display: flex;
            align-items: flex-start;
            padding-top: 15px;
          }
          .completed span {
            font-size: 1.8rem;
            margin-right: 10px;
          }
        `}
        </style>
      </Page>
    )
  }
}
