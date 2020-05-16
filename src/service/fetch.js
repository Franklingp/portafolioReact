import config from '../config';
import store from '../redux/store';

//token to authentication
let token = "";
let authentication = "";
const unSubscribe = store.subscribe(() => {
    let auth = store.getState();
    auth = auth.auth
    if(auth.isAuth === true){
        token = auth.token;
        authentication = `bearer ${token}`;
    }else{
        token = "";
        auth = "";
    }
});

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

//users
export const authHttp = async (method, route, body) => {
    const res = await Http(method, `/user/${route}`, body);
    return res;
}

//Base Rest Request
const Http = async (method, route, body) => {
    try{
        let headers = {
            'Authorization': authentication
        };
        if(body !== null && route.split('/')[1] !== "proyect"){
            body = JSON.stringify(body);
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authentication
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