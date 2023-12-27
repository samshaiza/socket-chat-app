import React from 'react'
import Message from './Message';

function ChatBody({ messages, lastMessageRef, typingStatus }) {
   const handleLeaveChat = () => {
    localStorage.removeItem('username');
    window.location.reload();
   }
  return (
    <>
        <header className='chat__mainHeader'>
            <h1>chat</h1>
        </header>
        <div className='message__container'>
            {messages.map((message) => <Message message={message} key={message.id} />)}
            {console.log(localStorage.getItem('username'))}
        </div>
        <div className='typing__status'>
            <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef}></div>
    </>
  )
}

export default ChatBody