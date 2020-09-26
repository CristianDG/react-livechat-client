import React, { useState } from 'react'
import InputMessage from './InputMessage.js';

const ChatLog = ({comments}) => {

    let [messages, setMessages] = useState(comments)

    return (
        <>
        <ul>
            {messages.map((m) => (<li>{m.message}</li>))}
        </ul>
        <InputMessage
            uid={0}
            sendMessage={message => setMessages(a => [...a, message]) }/>
        </>

    );
}

export default ChatLog
