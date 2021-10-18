import React from 'react';
import './Service.css'

const Service = (props) => {
    const{ img, service, fee } = props.service;
    return (
        <div className="container">
            <br />
            <img src={img} alt="" />
            <h5>{service}</h5>
            <h1>${fee}</h1>
        </div>
    );
};

export default Service;