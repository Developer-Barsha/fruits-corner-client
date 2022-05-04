import React from 'react';
import Graphs from '../../Graphs/Graphs';
import Carousels from '../Carousel/Carousel';
import Fruits from '../Fruits/Fruits';
import './Home'

const Home = () => {
    return (
        <div>
            <Carousels />
            <Fruits></Fruits>
            <Graphs></Graphs>
        </div>
    );
};

export default Home;