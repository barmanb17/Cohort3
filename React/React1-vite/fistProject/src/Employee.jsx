import React from 'react'

const Employee = ({name, experience = "Fresher"}) => {
  return (
    <div>
        <h3>Name: {name} </h3>
        <h3>Experience {experience} years</h3>
    </div>
  )
}

export default Employee