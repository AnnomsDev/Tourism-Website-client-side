import './Home.css'
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />

            <Footer />
        </div>
    );
};

export default Home;