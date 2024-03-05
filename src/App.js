import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './config/axios.js';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('messages/sync')
    .then( response => {
      setMessages(response.data);
    })
  }, [])
  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_WHATSAPP_MERN_KEY, {
      cluster: process.env.REACT_APP_PUSHER_WHATSAPP_MERN_CLUSTER
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);
  return (
    <div className="app">
      <div className ="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>  
    </div>
  );
}

export default App;