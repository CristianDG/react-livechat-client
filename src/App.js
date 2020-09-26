// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import ChatLog from './components/ChatLog.js';
import { getComments } from './services/api.js';
import './App.css';

// input
// message
// chat history
//
// TODO: depois
// ws


function App() {

    return (
      <div>
          <ChatLog comments={getComments()}/>
      </div>
    );
}

export default App;

