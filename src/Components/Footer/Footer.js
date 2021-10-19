import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="fotter">
            <div className={"fotter_div"}>
                <h3>About Us</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis incidunt adipisci eum? Aliquam repudiandae natus unde expedita, enim accusamus reiciendis consequatur at veritatis quibusdam itaque illum assumenda, minus cum alias debitis. Cumque rem nostrum temporibus labore totam modi veritatis!</p>
            </div>
            <div className="fotter_div">
                <h3>Our Aderss</h3>
                <h5>Dhaka Bangladesh</h5>
                <h5>55/87 New Tower Dhaka, </h5>
                <h5>Mobile : 0123456789</h5>
            </div>
            <div className="fotter_div">
                <h3>Payment Methoods</h3>
                <img className="myimg" src="https://programmingtask.000webhostapp.com/p-hero/Images/pay.jpg" alt="" />
            </div>
        </div>
    );
};

export default Footer;