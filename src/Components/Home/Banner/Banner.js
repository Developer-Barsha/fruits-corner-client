import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h1>Welcome to Fruits Corner!</h1>
                <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. You get to enjoy a variety of flavors and textures. And lots and lots of fiber. </p>
            </div>
            <div>
                <img src="https://www.farmparcel.in/wp-content/uploads/2019/09/fruits-bucket.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;