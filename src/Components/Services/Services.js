import React from 'react';
import useServices from '../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useServices();
    return (
        <>
            <div className="flexer">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;