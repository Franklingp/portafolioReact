import config from '../config';
import store from '../redux/store';

//Importing firebase and database config
import { collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite'
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
  const httpsFirebase = async (method, collectionName, body) => {
    //method: (get, push, update) to make changes on backend
    //route: ("projects") to access to a specific collection
    //body: (object) if you are pushing data to firebase
    try{
        switch(method){
            case "GET":{
                console.log('starting firebase connection to get data');
                const collectionInfo = collection(firebaseApp, collectionName);
                const snapshot = await getDocs(collectionInfo);
                const data = await snapshot.docs.map(doc => doc.data());
                console.log(data);
                return data;
            }
            case "POST": {
                console.log('starting firebase connection to get data');
                const docRef = await addDoc(collection(firebaseApp, collectionName), body);
                console.log(docRef);
                return true;
            }
            default: console.log("No se especifico metodo");
        }

    }catch(error){
        console.log(error);
        throw new Error('Has been an error when try the connect with firebase');
    }    
  }

// projects
export const projectHttp = async (method, collectionName, body) => {
    return await httpsFirebase(method, collectionName, body);
}

// contact
export const contactHttp = async (method, route, body) => {
    return await httpsFirebase(method, 'contact', body);
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