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
        axios.get(`https://frightening-hollow-59703.herokuapp.com/services/${id}`)
            .then(res => setService(res.data))
    }, [])

    const handlePlaceOrder = () => {
        const email = user.email;
        const service_id = id;
        const price = service.price;
        const name = service.name;
        const status = 'panding';
        axios.post('https://frightening-hollow-59703.herokuapp.com/place-order', {
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
        <div className='service-details'>
            <div>
                <img width='100%' src={service.img} alt="" />
                <h2>{service.name}</h2>
                <p>{service.des}</p>
            </div>
            <div className='details-container'>
                <h2>Book your journey</h2>
                <h3>What you will get</h3>
                {
                    service.serDe && service.serDe.split(',').map(fec => <p>{fec}</p>)
                }
                <h3>Price: ${service.price}</h3>

                <button onClick={handlePlaceOrder} className='al-btn-secondery' >Place order</button>
            </div>
        </div>
    );
};

export default ServiceDetails;