import React from 'react';

const LoadingSpinner = () => {
    return (
        <section className='w-75  d-flex justify-content-center align-items-center position-relative mx-auto' style={{ minHeight: '200px' }}>
            <div className='d-flex justify-content-center align-items-center mx-auto' >
                <img className='d-flex justify-content-center align-items-center mx-auto w-50' src="https://www.w3tweaks.com/images/essentials/css-loaders/window-icon-like-loader.gif" alt="" />
            </div>
        </section>
    );
};

export default LoadingSpinner;