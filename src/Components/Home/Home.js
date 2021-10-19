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
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
        </div>
    );
};

export default Home;