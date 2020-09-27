
const uri = 'http://localhost:8080/api'


async function fetchJSON(route, options){
    let response = await fetch(`${uri}${route}`, options)
    return await response.json()
}

export async function postMessage(message){
    let res = await fetch(`${uri}/messages`, { 
        headers:{
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers" : "*", 
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true
        },
        method: 'POST', 
        body: JSON.stringify(message),
    });
    return res.ok
}

export const getComments = async () => {
    return await fetchJSON('/messages',{method: 'GET'})
}

