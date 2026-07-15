import React from 'react'

const User = (props) => {
  return (
    <div>
        <h2>Name: {props.user.name}</h2>
        <h2>Profession: {props.user.prodession}</h2>
        <h2>Experience:{props.user.experience} years</h2>
    </div>
  )
}

export default User