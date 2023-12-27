import React, {useState} from 'react'
import * as Form from '@radix-ui/react-form'
export default function MessageForm({ socket }) {
    const [message, setMessage] = useState('');
    
    const handleTyping = () => {
        socket.emit('typing', `${localStorage.getItem('username')} is typing...`)
        setTimeout(() => {
            socket.emit('typing', ``);
        }, "2000")
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('username')) {
            socket.emit('message', {
                username: localStorage.getItem('username'),
                text: message,
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id
            })
        }
        setMessage('');
    }
  return (
    <Form.Root onSubmit={handleSubmit} className='FormRoot'>
        
        <Form.Field className='FormField'>
            
            <div style={{display: 'flex', alignItems: 'baseline', justifyContent: "space-between"}}>
                
                <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your message
                </Form.Message>

            </div>
            <Form.Control asChild>
                <input className='Input' autoComplete='off' value={message} onKeyDown={handleTyping} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='write message...' id="message" />
            </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }} type='submit' id='send'>post</button>
        </Form.Submit>
    </Form.Root>
  )
}