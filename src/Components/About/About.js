import React from 'react';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Team from './Team/Team';

const About = () => {
    return (
        <div>
            <Intro></Intro>
            <Team></Team>
            <Services></Services>
        </div>
    );
};

export default About;