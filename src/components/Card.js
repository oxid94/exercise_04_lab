import React from 'react'
import './Card.css'

const Card = (props) => {
  const { from, to } = props
  
  const cardGradient = {
    'height': '160px',
    'width': '170px',
    'borderRadius': '12px 12px 0px 0px',
    'backgroundImage': `linear-gradient(135deg, ${from} 10%, ${to} 100%)`
  }
  const cardColorTo = {
    'color': `${to}`,
  }

  return (
    <div className='card'>
      <div style={cardGradient}></div>
      <div className="card-description">
        <span className="card-color-from">{from}</span>
        <span style={cardColorTo}>{to}</span>
      </div>
    </div>
  )
}

export default Card
