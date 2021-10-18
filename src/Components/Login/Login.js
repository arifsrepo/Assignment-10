import React from 'react';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const{user, googleSignin, setUser, setIsLoading} = useAuth();

    const loginGoogle = () =>{
        googleSignin()
        .then((result) => {
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));
    }

    return (
        <div>
            {
                user.displayName? <h1>Hello {user.displayName}</h1>:<h1>Login</h1>
            }
            <button onClick={loginGoogle}>Login With Google</button>
        </div>
    );
};

export default Login;