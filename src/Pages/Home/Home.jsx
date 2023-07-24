import React from 'react';
import Slider from './Slider/Slider';
import HomeAbout from './HomeAbout/HomeAbout';
import Services from './Services/Services';
import PopularProduct from './PopularProduct/PopularProduct';
import HomeContact from './HomeContact/HomeContact';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Slider/>
            <HomeAbout/>
            <Services/>
            <HomeContact/>
            <PopularProduct/>
            <Team/>
        </div>
    );
};

export default Home;