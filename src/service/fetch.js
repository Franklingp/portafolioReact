import config from '../config';

// projects
export const projectHttp = async (method, route, body) => {
    const res = await Http(method, `/proyect/${route}`, body);
    return res.Proyect;
}

// contact
export const contactHttp = async (method, route, body) => {
    const res = await Http(method, `/contact/${route}`, body);
    return res.Message;
}

//Base Rest Request
const Http = async (method, route, body) => {
    try{
        if(body !== null){
            body = JSON.stringify(body);
        }
        const cfg = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body
        }
        const response = await fetch(`${config.url}${route}`, cfg);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.log(error);
        throw new Error('Has been an error when try the fetch apirest');
    }
}