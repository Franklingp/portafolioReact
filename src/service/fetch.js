import config from '../config';

//Rest Request
export const projectHttp = async (method, route, body) => {
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
        const response = await fetch(`${config.url}/proyect/${route}`, cfg);
        const json = await response.json();
        return json.Proyect;
    }
    catch(error){
        console.log(error);
        throw new Error('Has been an error when try the fetch apirest');
    }
} 