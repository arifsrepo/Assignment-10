import React from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';
import './Details.css'

const Details = () => {
    const service = useServices();
    
    const{detailsid} = useParams();
    return (
        <div className="main">
            <br /><br />
            {
                service.filter(food => food.id === detailsid).map(final => <div className="container_details"><div className="right"><h1>{final.service}</h1></div><div className="left"><img className="big_img" src={final.img} alt="" /></div></div>)
            }
        </div>
    );
};

export default Details;