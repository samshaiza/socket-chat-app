import React from 'react'

function Message({message}) {
  return (
    <div>
        {message.username === localStorage.getItem('username') ? (
            <div className='message_chats' key={message.id}>
                <p className='sender__name'>{message.username}</p>
                <div className='message__sender'>
                    <p>{message.text}</p>
                </div>
            </div>
        ) : (
            <div className='message__chats' key={message.id}>
                <p>{message.username}</p>
                <div className='message__recipient'>
                    <p>{message.text}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Message