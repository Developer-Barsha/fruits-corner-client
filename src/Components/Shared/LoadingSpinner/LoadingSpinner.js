import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const LoadingSpinner = () => {
    return (
        <div>
            <Spinner style={{color:'#8259ff'}} animation="grow" size="sm" />
            <Spinner style={{color:'#8259ff'}} animation="grow" />
        </div>
    );
};

export default LoadingSpinner;