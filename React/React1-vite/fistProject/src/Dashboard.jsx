import React from 'react'
import Profile from './Profile'

const Dashboard = (props) => {
  return (
    <Profile username={props.username}/>
  )
}

export default Dashboard