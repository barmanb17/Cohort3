import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>Welcome to my Card</h1>
        {props.children}
        
    </div>
  )
}

export default Card