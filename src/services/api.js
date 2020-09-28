
const uri = 'http://localhost:8080/api'

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

async function fetchJSON(route, options){
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
    return await fetchJSON('/messages', makeOptions(message));
}

export const getComments = async () => {
    return await fetchJSON('/messages',{ method: 'GET' })
}

