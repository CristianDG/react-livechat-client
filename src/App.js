// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import ChatLog from './components/ChatLog.js';
import './App.css';

// input done!
// message
// chat history done?
// send information to server done!
// style
//
// TODO: depois
// ws


function App() {

    let [user, setUser] = useState(null)

    useEffect(() => setUser({name: "CristianDG", uid: 0}) ,[])


    return (
      <div>
          { user ? <ChatLog user={user}/> : <h1>Faça o login primeiro</h1>}
      </div>
    );
}

export default App;

