import config from '../config';
import store from '../redux/store';

//Importing firebase and database config
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import firebaseApp from "../firebase.config";

//token to authentication
let token = "";
let authentication = "";
store.subscribe(() => {                         //const unSubscribe =
    let auth = store.getState();
    auth = auth.auth
    if (auth.isAuth === true) {
        token = auth.token;
        authentication = `bearer ${token}`;
    } else {
        token = "";
        auth = "";
    }
});

  //test getting project from firebase database
  const getData = async () => {
    console.log('Iniciando testing');
    const db = getFirestore(firebaseApp);
    const projectCollection = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectCollection);
    console.log("projectsSnapshot:");
    const projectList = await projectsSnapshot.docs.map(doc => doc.data());
    console.log("projectList:");
    console.log(projectList);
    return projectList;

  }

// projects
export const projectHttp = async (method, route, body) => {
    //const res = await Http(method, `/project/${route}`, body);
    //return res.json.Proyect;
    return getData();
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

//Base API Rest Request
const Http = async (method, route, body) => {
    try {
        let headers = {
            'Authorization': authentication
        };
        if (body !== null && route.split('/')[1] !== "proyect") {
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
    catch (error) {
        console.log(error);
        throw new Error('Has been an error when try the fetch apirest');
    }
}