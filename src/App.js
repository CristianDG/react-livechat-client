// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import ChatLog from './components/ChatLog.js';
import LoginPage from './components/LoginPage.js';
import { logInUser } from './services/api.js';
import './App.css';


function App() {

    let [user, setUser] = useState(null)

    useEffect(() => {
        let usr = localStorage.getItem("usr")
        if(usr) setUser(JSON.parse(usr))
    }, [])

    async function userSender(user){
        let response = await logInUser(user)
        if(response && !response.error){
            localStorage.setItem("usr",JSON.stringify(response))
            setUser(response)
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

