import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.primary? "Primary Login" : "Secondary LOgin"}
    </div>
  )
}

export default Button