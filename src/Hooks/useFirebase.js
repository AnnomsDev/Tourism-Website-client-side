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
    const [isLoading, setIsLoading] = useState(true)

    // loging with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // Logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(e => setError(e))
            .finally(() => setIsLoading(false))
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
            setIsLoading(false)
        })
    }, [])




    return {
        user,
        setUser,
        error,
        setError,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading
    };
};



export default useFirebase;



