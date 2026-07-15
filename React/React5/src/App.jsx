import React, {useState} from 'react'

const App = () => {
console.log("rendering...")
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Raman"
  })



  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>


      <button onClick={()=> {
        setCount(count + 1)
      }}>Count Increment</button>
      <button onClick={()=> {
        user.name = "bijoy"
      }}>Change name</button>
    </div>
  )
}

export default App