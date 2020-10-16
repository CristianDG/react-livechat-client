import React, { useState } from 'react';

export default function LoginPage({sendUser}) {

    let [userName, setUserName] = useState("")

    function validateAndSend(){
        if(validateUser(userName)){
            sendUser(userName)
        }
        setUserName("")
    }

    function validateUser(userName){
        return [
            userName !== "", 
            userName.length > 5 
        ].reduce((a,i)=>(a && i))
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e)=>{e.preventDefault(); validateAndSend()}}>
                <label htmlFor="usrName">User Name: </label>
                <input
                    autoComplete="off"
                    name="usrName" 
                    type="text" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)} />
                <button>Enviar</button>
            </form>
        </>
    );

}
