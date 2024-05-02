import config from '../config';
import store from '../redux/store';

//Importing firebase and database config
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
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
                const collectionInfo = collection(firebaseApp, collectionName);
                const snapshot = await getDocs(collectionInfo);
                const data = await snapshot.docs.map(doc => doc.data());
                return data;
            }
            case "POST": {
                const docRef = await setDoc(doc(firebaseApp, collectionName, body.id), body);
                return body;
            }
            case "DELETE":{
                await deleteDoc(doc(firebaseApp, collectionName, body));
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
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, body.email, body.password);
                const user = await userCredential.user;
                return user;
            }
            case "LOG-OUT":{
                const logOut = await signOut();
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