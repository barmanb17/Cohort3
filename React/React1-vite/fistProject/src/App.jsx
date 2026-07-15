import React from 'react'
import Dashboard from './Dashboard';

const App = () => {
  const username = "Bijoy";
  return (
    <div>
      <Dashboard username={username} />
    </div>
  )
}

export default App