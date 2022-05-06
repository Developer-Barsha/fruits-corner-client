import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <section className='w-75 position-relative' style={{minHeight:'300px'}}>
            <div className='spinner d-flex justify-content-center align-items-center mx-auto' >
                <img className='d-flex justify-content-center align-items-center mx-auto' src="https://www.w3tweaks.com/images/essentials/css-loaders/window-icon-like-loader.gif" width={'300px'} alt="" />
            </div>
        </section>
    );
};

export default LoadingSpinner;