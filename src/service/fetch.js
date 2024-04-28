import config from '../config';
import store from '../redux/store';

//Importing firebase and database config
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite'
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

/*
import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
*/

  //test getting project from firebase database
  const httpsFirebase = async (method, collectionName, body) => {
    //method: (get, push, update) to make changes on backend
    //route: ("projects") to access to a specific collection
    //body: (object) if you are pushing data to firebase
    switch(method){
        case "GET":{
            try{
                console.log('starting firebase connection to get data');
                const collectionInfo = collection(getFirestore(firebaseApp), collectionName);
                const snapshot = await getDocs(collectionInfo);
                console.log(collectionName, " Snapshot:");
                const data = await snapshot.docs.map(doc => doc.data());
                console.log("Data from firebase: ", data);
                console.log(data);
                return data;
            }catch(error){
                console.log(error);
                throw new Error('Has been an error when try the connect with firebase');
            }
        }
        case "POST": {
            console.log('starting firebase connection to get data');
            //await setDoc(doc(firebaseApp, collectionName), body);
            // Add a new document in collection "cities"
            await setDoc(doc(getFirestore(firebaseApp), "cities", "LA"), {
                name: "Los Angeles",
                state: "CA",
                country: "USA"
            });
            return true;
        }
        default: console.log("No se especifico metodo");
    }
    
    
  }

// projects
export const projectHttp = async (method, collectionName, body) => {
    //const res = await Http(method, `/project/${route}`, body);
    //return res.json.Proyect;
    return await httpsFirebase(method, collectionName, body);
}

// contact
export const contactHttp = async (method, route, body) => {
    // const res = await Http(method, `/contact/${route}`, body);
    // return res.json.Message;
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