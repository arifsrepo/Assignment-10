import React from 'react';
import { Button, Form } from 'react-bootstrap';
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
        <div className="login_flexer">
            <div className='login_div'>
                <div className="login_form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className='login_div'>
                {
                    user.displayName? <h1>Hello {user.displayName}</h1>:<h1>Login</h1>
                }
                <br />
                <Button onClick={loginGoogle}>Login With Google</Button>
            </div>
        </div>
    );
};

export default Login;