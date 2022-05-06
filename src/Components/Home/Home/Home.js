import React from 'react';
import Graphs from '../Overview/Overview';
import Carousels from '../Carousel/Carousel';
import Fruits from '../Fruits/Fruits';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Carousels />
            <Graphs></Graphs>
            <Fruits></Fruits>
            <Features></Features>
        </div>
    );
};

export default Home;