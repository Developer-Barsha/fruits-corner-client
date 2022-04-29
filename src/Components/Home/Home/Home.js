import React from 'react';
import Banner from '../Banner/Banner';
import Carousels from '../Carousel/Carousel';
import './Home'

const Home = () => {
    return (
        <div>
            <Carousels />
            <Banner></Banner>
        </div>
    );
};

export default Home;