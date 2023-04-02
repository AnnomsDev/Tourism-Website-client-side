import './Services.css'
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const axios = require('axios').default;

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('https://adventure-lovers.onrender.com/services')
            .then(services => {
                setServices(services.data)
                console.log(services.data) //test
            })

    }, [])




    return (
        <div className='services'>
            <h1>FIND <span className="heighlite">POPULAR</span><br /> DESTINATON</h1>
            <div className="containner">
                {
                    services.map(service => <Service key={service._id} {...service} />)
                }
            </div>


        </div>
    );
};

export default Services;