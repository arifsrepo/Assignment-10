import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useServices();
    return (
        <>
            <div className="flexer">
                {
                    services.map(service => <Link className="detailsLink" to={`/details/${service.id}`}><Service key={service.id} service={service}></Service></Link>)

                    // foods.filter(food => food.type === "Breakfast").map(final => <Link className="detailsLink" to={`/details/${final.id}`}><Foods key={final.id} food={final}></Foods></Link>)
                    
                }
            </div>
        </>
    );
};

export default Services;