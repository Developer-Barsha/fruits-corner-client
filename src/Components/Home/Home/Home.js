import React from 'react';
import Overview from '../Overview/Overview';
import Carousels from '../Carousel/Carousel';
import Fruits from '../Fruits/Fruits';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Carousels />
            <Overview></Overview>
            <Fruits></Fruits>
            <Features></Features>
        </div>
    );
};

export default Home;