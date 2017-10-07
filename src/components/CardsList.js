import React, { Component } from 'react'

import Card from './Card';
import './CardsList.css'

export default class CardsList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        { this.props.data.map( (element, index) => {
            return <Card key={index} from={element[0]} to={element[1]} />
          })
        }
      </div>
    )
  }
}
