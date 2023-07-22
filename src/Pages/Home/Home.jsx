import React from 'react';
import Slider from './Slider/Slider';
import HomeAbout from './HomeAbout/HomeAbout';
import Services from './Services/Services';
import Contact from './HomeContact/HomeContact';
import PopularProduct from './PopularProduct/PopularProduct';
import HomeContact from './HomeContact/HomeContact';

const Home = () => {
    return (
        <div>
            <Slider/>
            <HomeAbout/>
            <Services/>
            <HomeContact/>
            <PopularProduct/>
        </div>
    );
};

export default Home;