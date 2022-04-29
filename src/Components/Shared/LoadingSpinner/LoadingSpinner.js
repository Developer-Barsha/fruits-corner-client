import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const LoadingSpinner = () => {
    return (
        <div className='mx-auto text-center' style={{ width: '90%', textAlign: 'center', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <Spinner className='d-flex justify-content-right' style={{ color: '#8259ff' }} animation="grow" size="sm" />
            <Spinner className='d-flex justify-content-left' style={{ color: '#8259ff' }} animation="grow" />
        </div>
    );
};

export default LoadingSpinner;