import config from '../config';
import store from '../redux/store';

//Importing firebase and database config
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import firebaseApp from "../firebase.config";

//Importing depencency of authentication
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
                const docRef = await addDoc(collection(firebaseApp, collectionName), {...body});
                console.log(docRef.doc);
                return body;
            }
            
            default: console.log("No se especifico metodo");
        }

    }catch(error){
        console.log(error);
        throw new Error('Has been an error when try the connect with firebase');
    }    
  }

//Connecting with auth firebase
const authFirebase = async (method, body) => {
    //method: (get, push, update) to make changes on backend
    //body: (object) if you are pushing data to firebase
    try{
        switch(method){
            case "SIGN-IN":{
                console.log('starting firebase connection to sign in');
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, body.email, body.password);
                const user = await userCredential.user;
                return user;
            }
            case "LOG-OUT":{
                console.log('starting firebase connection to log out');
                const logOut = await signOut();
                console.log(logOut);
                return logOut;
            }
            default: console.log("No se especifico para la autenticacion");
        }

    }catch(error){
        console.log(error);
        return error;
    }    
  }

// projects
export const projectHttp = async (method, body) => {
    return await httpsFirebase(method, "projects", body);
}

// contact
export const contactHttp = async (method, body) => {
    return await httpsFirebase(method, 'contact', body);
}

//users
export const authHttp = async (method, body) => {
    return await authFirebase(method, body);
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