import React from 'react';
import { Link } from 'react-router-dom';
import Foods from '../../Foods/Foods';
import useFoods from '../../hooks/useFoods';
import './Lunch.css'

const Lunch = () => {
    const foods = useFoods();
    return (
        <>
            <div className="flexer">
                {
                    foods.filter(food => food.type === "Lunch").map(final => <Link className="detailsLink" to={`/details/${final.id}`}><Foods key={final.id} food={final}></Foods></Link>)
                }
            </div>
        </>
    );
};

export default Lunch;