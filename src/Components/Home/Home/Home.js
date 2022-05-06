import React from 'react';
import Banner from '../Banner/Banner';
import Graphs from '../Overview/Overview';
import Carousels from '../Carousel/Carousel';
import Fruits from '../Fruits/Fruits';
import './Home';

const Home = () => {
    return (
        <div>
            <Carousels />
            <Graphs></Graphs>
            <Fruits></Fruits>
            <Banner></Banner>
        </div>
    );
};

export default Home;