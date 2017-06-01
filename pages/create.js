import React, { Component } from 'react'

import Page from '../components/page'
import Link from '../components/link'
import Input from '../components/input'
import Select from '../components/select'
import TagPicker from '../components/tagPicker'
import Checkbox from '../components/checkbox'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange ({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render () {
    const { title, description } = this.state
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
            <Select options={['low', 'medium', 'high']} margin="0 120px 0 0" />
            <TagPicker />
          </div>
          <div className='bottom'>
            <div className="completed">
              <span>Completed</span>
              <Checkbox />
            </div>
            <div>
            <Link href='/' inverted margin='0 30px 0 0'>
              Cancel
            </Link>
            <Link href='/'>
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
            max-width: 840px;
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
