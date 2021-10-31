import './Home.css'
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Subscrive from '../Subscribe/Subscrive';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Feedback />
            <Subscrive />
            <Footer />
        </div>
    );
};

export default Home;