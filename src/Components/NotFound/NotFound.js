import React from 'react';
import notfound from '../../images/notfound.gif'

const NotFound = () => {
    return (
        <div>
            <img src={notfound} className='img-fluid d-flex mx-auto' alt="" />
        </div>
    );
};

export default NotFound;