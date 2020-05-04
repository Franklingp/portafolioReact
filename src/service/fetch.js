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

// upload Files
export const uploadFile = async (id, file) => {
    const data = new FormData();
    data.append('image', file);
    try{
        const cfg = {
            method: "POST",
            body: data
        }
        const response = await fetch(`${config.url}/proyect/uploadImage/${id}`, cfg);
        const json = await response.json();
        return json.Proyect;
    }
    catch(error){
        console.log(error);
    }
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