import { io } from 'socket.io-client';

import ChatPage from './components/ChatPage';
import StartModal from './components/StartModal';
const socket = io('http://localhost:4000', { autoConnect: false });


export default function App() {
  return (
    <div>
      <StartModal socket={socket} />
      <ChatPage socket={socket} />
    </div>
    
    
  );
}
