import React from 'react'

const Card = (props) => {
  return (
    <div>
        {props.icon}
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
  )
}

export default Card