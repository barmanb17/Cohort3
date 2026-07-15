import React, { useState } from 'react'

const Counter = () => {
    let [count , setCount] = useState(0)
  return (
    <div>
        <h1>Counter- {count}</h1>
        <button onClick={() => {
            setCount(prev => prev + 5)
        }}>+</button>
        <button onClick={() => {
            setCount(prev => prev - 5)
        }}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter