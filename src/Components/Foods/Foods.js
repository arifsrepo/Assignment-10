import React from 'react';
import './Foods.css';

const Foods = (props) => {
    const{img, item, price } = props.food;
    return (
        <div className="container">
            <br />
            <img src={img} alt="" />
            <h5>{item}</h5>
            <h1>${price}</h1>
        </div>
    );
};

export default Foods;