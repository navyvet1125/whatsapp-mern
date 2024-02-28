import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src ='https://avatars.githubusercontent.com/u/17504105?v=4'/>
        <div className='sidebar__headerRight'>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        
        </div>
      
      </div>
      <div className='sidebar__search'>
      </div>
    </div>
  )
}

export default Sidebar;
