import './ServiceDetails.css'
import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState({})

    axios.get(`http://localhost:5000/services/${id}`)
        .then(res => setService(res.data))

    return (
        <div>
            {/* <img src={service.img} alt="" /> */}
            <h2>{service.name}</h2>
            <p>{service.des}</p>
            <button>Book</button>
        </div>
    );
};

export default ServiceDetails;