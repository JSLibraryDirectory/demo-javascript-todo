import React, { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prev => ({ isOpen: !prev.isOpen }))
  }

  render () {
    const { list, children, activeItem } = this.props
    const { isOpen } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>
          Sort By
        </button>
        {isOpen && (
          <ul>
            {list.map(item => (
              <li>
                <button className="item">{item}</button>
              </li>
            ))}
          </ul>
        )}
        <style jsx>
          {`
          button {
            font-size: 1rem;
            border: none;
            background: none;
            cursor: pointer;
          }
          ul {
            
          }
        `}
        </style>
      </div>
    )
  }
}
