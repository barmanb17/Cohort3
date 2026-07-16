import React from 'react'

const User = () => {
  const users = [
  {
    id: 1,
    name: "Rahul",
    age: 22
  },
  {
    id: 2,
    name: "Amit",
    age: 25
  },
  {
    id: 3,
    name: "Priya",
    age: 21
  }
];
  return (
    <div>
      {users.map(users => (
        <h1 key={users.id}>{users.name} {users.age}</h1>
      ))}
    </div>
  )
}

export default User