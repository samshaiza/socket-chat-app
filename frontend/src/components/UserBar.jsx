import React, { useEffect, useState } from 'react'

function UserBar({socket}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('users', (data) => {
          data.forEach((user) => {
            user.self = user.userId === socket.id;
            setUsers(array => [...array, user]);
          })
          setUsers(data);
          console.log("user signal: " + users)
        });
        socket.on("user connected", (user) => {
          setUsers(array => [...array, user]);
          console.log('user connected signal: ' + users)
        });
        console.log('users: ' + users)
    }, [socket])
    
  return (
    <div className="chat__sidebar">
    <h2>Open Chat</h2>
    
    <div>
      <h4 className="chat__header">active users</h4>
      <div className="chat__users">
        {users.map((user) => <p key={user.socketId}>{user.username}</p>)}
      </div>
    </div>
  
  </div>
  )
}

export default UserBar