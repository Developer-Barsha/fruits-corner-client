import React from 'react';
import Banner from '../Banner/Banner';
import Graphs from '../Graphs/Graphs';
import Carousels from '../Carousel/Carousel';
import Fruits from '../Fruits/Fruits';
import './Home'

const Home = () => {
    return (
        <div>
            <Carousels />
            <Banner></Banner>
            <Fruits></Fruits>
            <Graphs></Graphs>
        </div>
    );
};

export default Home;