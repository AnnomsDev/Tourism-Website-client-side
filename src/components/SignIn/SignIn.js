import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const SignIn = () => {
    const { setUser, setIsLoading, signInWithGoogle } = useFirebase()
    const history = useHistory()
    const location = useLocation()

    // const redirectURI = '/'
    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirectURI)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => setIsLoading(false))

    }



    return (
        <div>
            <button onClick={handleGoogleSignIn} > Sign in with gogogle</button>
            <button onClick={() => console.log(redirectURI)}> TESt </button>
        </div>
    );
};

export default SignIn;