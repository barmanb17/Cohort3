import React from 'react'

const App = () => {
  const employee = {
  name: "Bijoy",
  company: {
    name: "Google",
    location: {
      city: "Bangalore",
      state: "Karnataka",
      pincode: 560001,
    },
  },
};
  return (
    <Employee employee={employee} />
  )
}

export default App