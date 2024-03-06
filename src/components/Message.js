import React, { useState } from "react";
import "./Message.css";

const Message = (props) => {
    let recieved = props.recieved;
    let message = props.message;
    let timeStamp = props.timeStamp;
    let name = props.name;
    let index = props.index;
    return(
        <p className={`chat__message ${!recieved && "chat__receiver"}`}>
        <span className='chat__name'>{name}</span>
        {message}
        <span className='chat__timestamp'>{timeStamp}</span>
      </p>
    )
}

export default Message;