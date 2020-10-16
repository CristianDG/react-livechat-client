import React, { useState, useEffect } from 'react'
import InputMessage from './InputMessage.js';
import { socket, getComments, postMessage } from '../services/api.js';

import './ChatLog.css';


const ChatLog = ({user}) => {

    let [messages, setMessages] = useState([])

    let [lastMessage, setLastMessage] = useState({})

    socket.on("postedMessage", data => setLastMessage(data))

    useEffect(()=>{
        // #lisp
        // TODO connect the user and get the messages via WS
        (async () => setMessages(await getComments()) )()
    }, [])

    // no lugar de baixar tudo, recebe somente a mensagem de volta do servidor
    useEffect(()=>{
        setMessages(a => a.concat(lastMessage))
    }, [lastMessage])

    async function messageSender(text){
        let message = {uid: user.uid, text}
        postMessage(message)
    }

    return (
        <>

        <ul id="messages">
            {   /*TODO: acredito que isso pode dar erro quando só tem uma mensagem no servidor, mas não tenho certeza*/ 
                messages.length > 1
                    ? messages.map((m) => (
                        m.uid !== user.uid 
                            ? <li className="others-message" key={m.id.toString()}>{`${m.name}: ${m.text}`}</li>
                            : <li className="my-messages" key={m.id.toString()}>{m.text}</li>))
                    : <></> }
        </ul>
        <InputMessage sendMessage={messageSender}/>

        </>
    );
}

export default ChatLog
