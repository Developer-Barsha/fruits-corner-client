import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <div className='service'>
                <h1><i className="fa-solid fa-list-check"></i></h1>
                <h3>Easy Managing</h3>
                <p>We designed UI in the easiest way for you to manage products easily.</p>
            </div>
            <div className='service'>
                <h1><i className="fa-solid fa-shield-halved"></i></h1>
                <h3>Hard Security</h3>
                <p>Our facilities give you high security requirements to the highest standards.</p>
            </div>
            <div className='service'>
                <h1><i className="fa-solid fa-truck-moving"></i></h1>
                <h3>Fast Delivery</h3>
                <p>We try our best to deliver products harmlessly as soon as possible to you.</p>
            </div>
        </div>
    );
};

export default Services;