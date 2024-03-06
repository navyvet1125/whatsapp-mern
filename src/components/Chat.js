import React, { Fragment, useState } from 'react';
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import MicIcon from "@mui/icons-material/Mic";
import axios from '../config/axios.js';
import Message from './Message.js';

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message:input,
      name: "Demo App"
    });

    setInput('');
    
  }
  
  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar />
          <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>
          <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          </div>
        </div>
        <div className='chat__body'>
          {messages.map((message, index) => (
            <Fragment key={index}>
              <Message
                recieved={message.received}
                message={message.message}
                timeStamp={message.timeStamp}
                name={message.name}
              />
            </Fragment>

          ))}
        </div>
        <div className='chat__footer'>
          <InsertEmoticon />
          <form>
            <input 
            value={input} 
            onChange={e => {
              setInput(e.target.value)
            }} 
            placeholder='Type a message' type='text'/>
            <button onClick={sendMessage} type='submit'>
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
    </div>
  )
}

export default Chat;