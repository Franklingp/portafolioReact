import config from '../config';

// projects
export const projectHttp = async (method, route, body) => {
    const res = await Http(method, `/proyect/${route}`, body);
    return res.json.Proyect;
}

// contact
export const contactHttp = async (method, route, body) => {
    const res = await Http(method, `/contact/${route}`, body);
    return res.json.Message;
}

//users     ojo que no siempre retorna el token
export const authHttp = async (method, route, body) => {
    const res = await Http(method, `/user/${route}`, body);
    return res;
}

//Base Rest Request
const Http = async (method, route, body) => {
    try{
        let headers = {};
        if(body !== null && route.split('/')[1] !== "proyect"){
            body = JSON.stringify(body);
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        let cfg = {
            method,
            headers,
            body
        }
        const response = await fetch(`${config.url}${route}`, cfg);
        const json = await response.json();
        const obj = { json, status: response.status }
        return obj;
    }
    catch(error){
        console.log(error);
        throw new Error('Has been an error when try the fetch apirest');
    }
}