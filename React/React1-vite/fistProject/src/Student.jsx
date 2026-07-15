import React from 'react'

const Student = ({name, age, isPlaced}) => {
  const placed = (props) => {
    if(isPlaced){
      return "Placed: Yes"
    } else {
      return "Placed: No"
    }
  }
  placed()
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>{placed()}</h3>
    </div>
  )
}

export default Student