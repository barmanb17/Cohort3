import React, { useState } from 'react'

const App = () => {

  const [formData, setFormdata] = useState({
    name: "",
    email: ""
  })
  return (
    <div>
      <input 
      type="text" 
      value={formData.name}
      placeholder='Enter Your Name'
      onChange={(e)=> setFormdata({
        ...formData, name: e.target.value
      })}

      />

      <input
       type="email"
       value={formData.email}
       placeholder='Enter Your Email'
       onChange={(e) => setFormdata({
        ...formData, email: e.target.value
       })}
        />


        <h2>Name: {formData.name}</h2>
        <h2>Email: {formData.email}</h2>
    </div>
  )
}

export default App