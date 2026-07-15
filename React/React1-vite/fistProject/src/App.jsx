import React from 'react'
import Layout from './Layout'

const App = () => {
  const Header = () => {
    return <h1>🚀 React Bootcamp</h1>
  }
  const Footer = () => {
    return <h3>Made by Bijoy</h3>
  }
  return (
    <div>
      <Layout
      Header={Header}
      Footer={Footer}
      />
    </div>
  )
}

export default App