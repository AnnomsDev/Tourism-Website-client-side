import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase()

    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.uid ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );


};



export default PrivateRoute;