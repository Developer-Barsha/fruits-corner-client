import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='mx-auto text-center d-flex justify-content-right align-items-center text-center' style={{ width: '100%'}}>
            <img  className='d-flex justify-content-right' src="https://www.w3tweaks.com/images/essentials/css-loaders/window-icon-like-loader.gif" width={'300px'} alt="" />
        </div>
    );
};

export default LoadingSpinner;