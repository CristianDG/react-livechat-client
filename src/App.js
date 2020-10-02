// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import ChatLog from './components/ChatLog.js';
import { logInUser } from './services/api.js';
import './App.css';


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
      <>
          {
            user
                ? <>
                    <nav>
                        <button className="exit-button" onClick={userExit}>Sair</button>
                    </nav>
                    <ChatLog user={user}/>
                  </>
                : <LoginPage sendUser={userSender}/>
          }
      </>
    );
}

export default App;

