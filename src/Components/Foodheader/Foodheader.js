import React from 'react';
import { NavLink } from 'react-router-dom';
import './Foodheader.css'

const Foodheader = () => {
    const active = {"color":"red"}
    return (
        <>
            <br />
            <br />
            <div className="sub-header">
                <NavLink activeStyle={active} className="menu" to="/breakfast">Breakfast</NavLink>
                <NavLink activeStyle={active} className="menu" to="/lunch">Lunch</NavLink>
                <NavLink activeStyle={active} className="menu" to="/dinner">Dinner</NavLink>
            </div>
        </>
    );
};

export default Foodheader;