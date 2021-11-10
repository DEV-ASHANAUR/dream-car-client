import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import ServiceArea from '../ServiceArea/ServiceArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceArea></ServiceArea>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;