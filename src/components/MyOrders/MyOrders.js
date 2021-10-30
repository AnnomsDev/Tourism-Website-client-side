import './MyOrders.css'
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import useFirebase from '../../Hooks/useFirebase';

const MyOrders = () => {
    const { user } = useFirebase()
    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/my-orders/rdrashal@gmail.com')
            .then(res => setMyOrders(res.data))
            .catch(error => console.log('Got an error ', error))

    }, [])



    return (
        <div>
            This is My orders
            {
                myOrders.map(order => <h1>{order.service_id}</h1>)
            }
        </div>
    );
};

export default MyOrders;