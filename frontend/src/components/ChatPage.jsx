import React, {useEffect, useState, useRef} from 'react'
import ChatBody from './ChatBody'
import MessageForm from './MessageForm'
import UserBar from './UserBar'

function ChatPage({socket}) {
    const [messages, setMessages] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef(null);
    

    useEffect(() => {
        socket.on('messageResponse', data => setMessages([...messages, data]));
        console.log(messages)
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        socket.on('connect_error', (err) => {
            alert('Error:', err);
        })

        socket.on('typingResponse', (data) => setTypingStatus(data))
        return () => {
            socket.off("connect_error");
        }
    }, [socket])

  return (
    <div className='chat'>
        <UserBar socket={socket} />
        <div className="chat__main">
            <ChatBody messages={messages} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
            <MessageForm socket={socket} />
        </div>
    </div>
  )
}

export default ChatPage