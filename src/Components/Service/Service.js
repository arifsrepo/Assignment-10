import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{ id, img, service, fee } = props.service;
    return (
        <div className="card_container">
            <br />
            <img src={img} alt="" />
            <h5>{service}</h5>
            <h1>${fee}</h1>
            <Link className="detailsLink" to={`/details/${id}`}><Button> View Details </Button></Link>
        </div>
    );
};

export default Service;