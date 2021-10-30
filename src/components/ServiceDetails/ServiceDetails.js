import './ServiceDetails.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import useFirebase from '../../Hooks/useFirebase';

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState({})
    const { user } = useFirebase()

    useEffect(() => {
        axios.get(`http://localhost:5000/services/${id}`)
            .then(res => setService(res.data))
    }, [])

    const handlePlaceOrder = () => {
        const email = user.email;
        const service_id = id;
        const price = service.price;
        const name = service.name;
        const status = 'panding';
        axios.post('http://localhost:5000/place-order', {
            email,
            service_id,
            price,
            name,
            status
        })
            .then(result => {
                if (result.data.insertedId) {
                    alert('Your order is placed')
                }
                else {
                    alert("Something went wrong. please try again")
                }
            })
            .catch(error => {
                alert("Something went wrong. please try again")
                console.log("got an error: ", error)
            })

    }






    return (
        <div>
            {/* <img src={service.img} alt="" /> */}
            <h2>{service.name}</h2>
            <p>{service.des}</p>
            <button onClick={handlePlaceOrder} className='btn-secondery' >Place order</button>
        </div>
    );
};

export default ServiceDetails;