import React from 'react';
import Slider from './Slider/Slider';
import HomeAbout from './HomeAbout/HomeAbout';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Slider/>
            <HomeAbout/>
            <Services/>
        </div>
    );
};

export default Home;