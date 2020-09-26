import React, { useState } from 'react'

const InputMessage = ({uid, sendMessage}) => {

    const [message, setMessage] = useState("")

    function submitMessage(message){
        sendMessage(message)
        setMessage("")
    }

    return (
        <>

            <input
                placeholder="escreva algo"
                value={message}
                onChange={ (e) => setMessage(e.target.value) }
            />
            <button
                onClick={() => (submitMessage({uid, message}))}>
                    {'>'}
            </button>

        </>
    );
}

const ChatLog = () => {

    let [messages, setMessages] = useState([{uid: 0, message: "opa!"},{uid: 1, message: "eae"}])

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
