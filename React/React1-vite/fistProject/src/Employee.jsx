import React from 'react'

const Employee = (props) => {
  return (
    <div>
        <h3>Name: {props.employee.name}</h3>
        <h3>Company: {props.employee.company.name}</h3>
        <h3>City: {props.employee.company.location.city}</h3>
        <h3>State: {props.employee.company.location.state}</h3>
        <h3>Pincode: {props.employee.company.location.pincode}</h3>
    </div>
  )
}

export default Employee