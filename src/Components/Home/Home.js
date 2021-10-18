import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';

const Home = () => {
    const {user, logout, isLoading } = useAuth();
    
    if(isLoading){
        return 'Loading...';
    }

    return (
        <div>
            <nav>
                <div className="flexer_nav">
                    <img className="top-img" src="https://programmingtask.000webhostapp.com/p-hero/hot-onion-restaurent/logo2.png" alt="" />
                </div>
                <div className="flexer_nav"><br />
                <NavLink to="/breakfast" className="button_nav">Log In</NavLink>
                <NavLink to="/lunch" className="button_nav">Log In</NavLink>
                    {
                        user.displayName?<div className="left_margin"><div className='margin_right'><h1>{user.displayName}</h1></div><div className="button" onClick={logout}>Log Out</div></div>:<NavLink to="/login" className="button_nav">Log In</NavLink>
                    }
                </div>
            </nav>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
        </div>
    );
};

export default Home;