import { useEffect, useState } from "react";

const useServices = () => {
    const[services, setServicess] = useState([]);

    useEffect(() => {
        // fetch('https://mocki.io/v1/7f325333-40a9-4320-a62a-b4ecc1a73e7f')
        fetch('https://mocki.io/v1/c23108c5-40e4-47df-acf4-aab4ed93fc08')
        .then(res => res.json())
        .then(services => setServicess(services))
    },[])
    return services;
}

export default useServices;