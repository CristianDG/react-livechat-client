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

export default InputMessage
