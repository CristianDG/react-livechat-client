import React, { useState, useEffect } from 'react'
import InputMessage from './InputMessage.js';
import { getComments, postMessage } from '../services/api.js';


const ChatLog = ({user}) => {

    let [messages, setMessages] = useState([])

    let [lastMessage, setLastMessage] = useState({})

    useEffect(()=>{
        (async function(){
            setMessages(await getComments())
        })()
    }, [lastMessage])

    async function sender(text){
        let message = {uid: user.uid, text}
        await postMessage(message)
        setLastMessage(message)
    }

    console.log(messages)


    return (
        <>

        <ul>
            {messages.map((m) => (<li key={m.id}>{m.text}</li>))}
        </ul>
        <InputMessage sendMessage={sender}/>

        </>
    );
}

export default ChatLog
