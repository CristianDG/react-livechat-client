import React, { useState } from 'react'
import './InputMessage.css'

const InputMessage = ({sendMessage}) => {

    const [message, setMessage] = useState("")

    function submitMessage(){
        if (validateMessagee(message)) {
            sendMessage(message)
            setMessage("")
        }
    }

    function validateMessagee(message) {
        if (message === "") {
            return false
        } else {
            return true
        }
    }

    return (
        <>
            <form className="message-input" onSubmit={ (e) => {e.preventDefault(); submitMessage()} }>
                <input
                    placeholder="escreva algo"
                    value={message}
                    onChange={ (e) => setMessage(e.target.value) }
                />
                <button type="submit">
                        {'>'}
                </button>
            </form>
        </>
    );
}

export default InputMessage
