import { useEffect, useState } from "react";

const useFoods = () => {
    const[foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/7f325333-40a9-4320-a62a-b4ecc1a73e7f')
        .then(res => res.json())
        .then(foods => setFoods(foods))
    },[])
    return foods;
}

export default useFoods;