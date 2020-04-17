import config from '../config';

//Rest Request
export const projectHttp = async (method, route, body) => {
    console.log(method, route, body);
    try{
        const cfg = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'applicarion/json'
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