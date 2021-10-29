import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"
import initiallizeAuthentication from "../Firebase/FirebaseInit";
import React from 'react';



initiallizeAuthentication();
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    // loging with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // Logout
    const logOut = () => {
        signOut(auth)
            .then(()=>{
                setUser({})
            })
            .catch(e=>setError(e))
    }



    // special Observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, [])




    return {
        user,
        setUser,
        error,
        setError,
        signInWithGoogle,
        logOut
    };
};



export default useFirebase;



