// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import ChatLog from './components/ChatLog.js';
import { logInUser } from './services/api.js';
import './App.css';

// [X] input
// [ ] message style
// [?] chat history
// [X] send information to server
// [ ] style
// [X] localStorage user caching
// [X] login
// [ ] register
//
// TODO: depois
// ws

function LoginPage({sendUser}) {

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
                    name="usrName" 
                    type="text" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)} />
                <button>Enviar</button>
            </form>
        </>
    );

}

function App() {

    let [user, setUser] = useState(null)

    useEffect(() => {
        let usr = localStorage.getItem("usr")
        if(usr){
            setUser(JSON.parse(usr))
        }
    }, [])

    async function userSender(user){
        let response = await logInUser(user)
        if(response){
            if(!response.error){
                localStorage.setItem("usr",JSON.stringify(response))
                setUser(response)
            }
        }
    }

    function userExit(){
        localStorage.removeItem("usr")
        setUser(null)
    }

    return (
      <div className="screen-centered">
          {
            user
                ? <>
                    <ChatLog user={user}/>
                    <button onClick={userExit}>Sair</button>
                  </>
                : <LoginPage sendUser={userSender}/>
          }
      </div>
    );
}

export default App;

