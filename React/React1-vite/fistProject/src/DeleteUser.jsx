import React, { useState } from 'react'

const User = () => {
    const [users, setUsers] = useState([
            { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
    ])

    const deleteUser = (id) => {
       const filteredUsers = users.filter(user => user.id !== user);
       setUsers(filteredUsers);
    }
  return (
    <div>
        {
            users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <button onClick={()=> deleteUser(user.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  );
};

export default User;