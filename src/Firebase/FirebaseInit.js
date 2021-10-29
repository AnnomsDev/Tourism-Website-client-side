import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebaseconfig";

const initiallizeAuthentication = () =>{
    initializeApp(firebaseConfig);
} 


export default initiallizeAuthentication;