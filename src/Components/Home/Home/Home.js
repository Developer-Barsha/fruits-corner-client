import React from 'react';
import Overview from '../Overview/Overview';
import Carousels from '../Carousel/Carousel';
import Fruits from '../Fruits/Fruits';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Carousels />
            <Overview></Overview>
            <Fruits></Fruits>
            <Featured></Featured>
        </div>
    );
};

export default Home;