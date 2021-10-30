import './ManageAllOrders.css'
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/all-orders')
            .then(res => setOrders(res.data))
            .catch(error => console.log('Got an error', error))
    }, [])


    // Delete btn handler
    const handleDeleteBth = id => {
        const confirm = window.confirm('Do you want to delete this order?')
        if (confirm) {
            axios.get(`http://localhost:5000/delete/${id}`)
                .then(res => {
                    if (res.data.deletedCount === 1) {
                        const remainning = orders.filter(order => order._id !== id)
                        setOrders(remainning)
                        alert('one item deleted')
                    }


                })
        }
    }


    return (
        <div className='manage-all-orders' >
            <h2>Manage all Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Email</th>
                        <th>Service Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>
                                    <span className='delete-btn'><MdDeleteForever onClick={() => handleDeleteBth(order._id)} /> </span>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    );
};

export default ManageAllOrders;