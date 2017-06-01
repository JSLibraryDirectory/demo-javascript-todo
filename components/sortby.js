import React, { Component } from 'react'
import Check from './iconCheck'
import Arrow from './iconArrow'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedItem: 'Date Created'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prev => ({ isOpen: !prev.isOpen }))
  }

  render() {
    const { list, children, activeItem } = this.props
    const { isOpen, selectedItem } = this.state
    return (
      <div className="wrapper">
        <button onClick={this.handleClick}>
          Sort By
          <span className="button__selected">
            {selectedItem}
          </span>
          <span className={`arrow ${isOpen && 'arrow--open'}`}>
            <Arrow />
          </span>
        </button>
        {isOpen &&
          <ul>
            <li className={'selected'}><Check /> Date Created</li>
            <li>Priority</li>
            <li>Completed</li>
            <li>Title</li>
          </ul>}
        <style jsx>
          {`
          .wrapper {
            position:relative;
          }
          button {
            font-size: 1.5rem;
            border: none;
            background: none;
            cursor: pointer;
            font-weight: 600;
            outline: 0;
            padding-right: 15px;
            color: #444444;
          }

          .button__selected {
            font-weight: 400;
            margin: 0 10px;
            min-width: 90px;
            display: inline-block;
          }

          .arrow {
            position: absolute;
            width: 15px;
            height: 15px;
            top: 4px;
            right: 0;
            display: inline-block;
            transition: transform .2s ease;
            transform: rotate(-90deg);
          }

          .arrow--open {
            transform: rotate(90deg);
          }

          ul {
            list-style: none;
            margin: 0;
            width: 100%;
            background: #fff;
            box-shadow: 0 20px 70px 0 #E7E2EF;
            padding: 24px 22px;
            position: absolute;
            top: 52px;
          }

          li {
            padding: 0 0 0 30px; 
            margin: 5px 0;
            position: relative;
            cursor: pointer;
            font-size: 1.5rem;
            opacity: 0.5;
            transition: opacity .15s ease;
          }

          li:hover {
            opacity: 1;
          }

          li.selected{
            opacity: 1;
          }

          li > :global(.icon) {
            position: absolute;
            left: 0;
          }
        `}
        </style>
      </div>
    )
  }
}
