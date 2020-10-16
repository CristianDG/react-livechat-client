import socketIOClient from 'socket.io-client';

// TODO: lembrar que nessa etrutura de função usando const = sem side effects
let localIP = '192.168.0.113'
export const base = `http://${localIP}:8080`
export const socket = socketIOClient(base)
const uri = `${base}/api`


const makeOptions = (message) => ({ 
    headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "*", 
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true
    },
    method: 'POST', 
    body: JSON.stringify({data: message}),
});

const fetchJSON = async (route, options) => {
    let response = await fetch(`${uri}${route}`, options)
    return await response.json()
}

export async function logInUser(userName){
    try{
        let result = await fetchJSON('/login', makeOptions(userName));
        return result
    }catch(error){
        return { error }
    }
}

export async function postMessage(message){
    socket.emit("postMessage", message);
}

export const getComments = async () => {
    return await fetchJSON('/messages',{ method: 'GET' })
}


