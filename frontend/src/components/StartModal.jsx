import React, { useState } from 'react'
import MicroModal from 'react-micro-modal'
function StartModal({ socket }) {
  return (
    <MicroModal openInitially>
        {(close) => <ModalContent socket={socket} close={close}/>}
    </MicroModal>
  )
}

const ModalContent = ({close, socket}) => {
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username) {
            socket.auth = { username }
            localStorage.setItem('username', username);
            // socket.emit('newUser', {username, socketId: socket.id})
            close();
            socket.connect();
        } else {
            alert('please enter a username')
        }
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h2 >hi!</h2>
            <label style={{marginRight: '10px'}} htmlFor='username'>username</label>
            <input
                autoComplete='off'
                type='text'
                minLength={3}
                name='username'
                id='username'
                className='username__input'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSubmit} type='submit'>log in</button>
        </form>
    )
}

export default StartModal