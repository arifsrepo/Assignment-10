import React from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';
import './Details.css'

const Details = () => {
    const service = useServices();
    console.log(service);
    const{detailsid} = useParams();
    return (
        <>
            <div className="main">
                <br /><br />
                {
                    service.filter(service => service.id === detailsid).map(final => 
                    <div className="container_details">
                        <div className="right">
                            <h1>{final.service}</h1>
                            <br />
                            <p>{final.desc}</p>
                        </div>
                        <div className="left">
                            <img className="big_img" src={final.img} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Details;