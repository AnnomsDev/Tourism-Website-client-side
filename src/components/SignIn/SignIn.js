import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const SignIn = () => {
    const { user, setUser, error, setError, signInWithGoogle } = useFirebase()
    const history = useHistory()
    const location = useLocation()
    console.log(user)
    console.log('History rd', history)
    console.log('Location rd', location)

    // const redirectURI = '/'
    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                console.log(user)
                console.log("rd uri", redirectURI)
                history.push(redirectURI)
            })
            .catch(e => {
                console.log(e)
            })
        // .catch(e=>{
        //     console.log(e)
        //     setError(e.message)
        // })
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn} > Sign in with gogogle</button>
            <button onClick={() => console.log(redirectURI)}> TESt </button>
        </div>
    );
};

export default SignIn;





// import './SignIn.css'
// import React from 'react';

// const SignIn = () => {
//     return (
//         <div className='sign-in'>
//             <button>Sign in with Google</button>
//         </div>
//     );
// };

// export default SignIn;