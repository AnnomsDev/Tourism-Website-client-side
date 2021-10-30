import './SignIn.css'
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
        <div className='sign-in'>
            <div className="sign-in-containner">
                <h2>Get Started</h2>
                <button onClick={handleGoogleSignIn}>
                    <img height='30px' src="./img/google.svg" alt="" />
                    <p>Continue in with gogogle</p>
                </button>


            </div>





        </div>
    );
};

export default SignIn;