import React from 'react';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Team from './Team/Team';

const About = () => {
    return (
        <div>
            <Intro></Intro>
            <Features></Features>
            <Team></Team>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default About;