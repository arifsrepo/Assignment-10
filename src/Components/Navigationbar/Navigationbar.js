import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Navigationbar.css'

const Navigationbar = () => {
    const{ user, logout } = useAuth();
    return (
        <div>
            <Navbar sticky="top" bg="light" variant="light">
                <Container>
                <Navbar.Brand>247 HEALTHCARE SERVICE</Navbar.Brand>
                <Nav className="me-auto">
                <NavLink className="nav_lonk_custome" to="/home">Home</NavLink>
                <NavLink className="nav_lonk_custome" to="/about">About</NavLink>
                </Nav>
                </Container>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {
                             user.email?<div className="log_toggler"><h6>{user.displayName||user.email}</h6><NavLink to='' className="nav_lonk_custome" onClick={logout}>Logout</NavLink></div> : <NavLink className="nav_lonk_custome" to="/login">Login</NavLink>
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigationbar;