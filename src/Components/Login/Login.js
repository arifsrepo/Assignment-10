import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const{user, googleSignin, setUser, setIsLoading, createUser, isLoading , setPassword, setEmail, emailSignin, error} = useAuth();

    const [isLogin, setIsLogin] = useState(false);

    if(isLoading){
        return 'Loading...';
    }

    const loginGoogle = () =>{
        googleSignin()
        .then((result) => {
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));
    }

    const emailField = (e) => {
        setEmail(e.target.value)
    }

    const passField = (e) => {
        setPassword(e.target.value)
    }

    const toggleBtn = (e) => {
        setIsLogin(e.target.checked);
    }

    const togglefunction =  (e) => {
        e.preventDefault();
        if(isLogin){
            console.log('login');
            emailSignin();
        }
        else{
            console.log('reg');
            createUser();
        }
    }

    return (
        <div className="login_flexer">
            <div className='login_div'>
                <div className="login_form">
                    <Form>
                        {
                            isLogin?<h1>Login</h1>:<h1>Register</h1>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={emailField} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={passField} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleBtn} type="checkbox" label="Check me out" />
                        </Form.Group>
                        <br />
                        <Form.Text style={{color:"#dc3545"}}><b>{error}</b></Form.Text>
                        <br />
                        <Button onClick={togglefunction} className="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className='login_div'>
                {
                     user.displayName? <h1>Hello {user.displayName}</h1>: user.email?<h1>{user.email}</h1> :<h1>Login</h1>
                }
                <br />
                <Button onClick={loginGoogle}>Login With Google</Button>
            </div>
        </div>
    );
};

export default Login;