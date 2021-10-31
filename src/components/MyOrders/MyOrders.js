import './MyOrders.css'
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import useFirebase from '../../Hooks/useFirebase';
import { MdDeleteForever } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi'

const MyOrders = () => {
    const { user } = useFirebase()
    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:5000/my-orders/${user.email}`)
            .then(res => setMyOrders(res.data))
            .catch(error => console.log('Got an error ', error))

    }, [user])

    // Delete btn handler
    const handleDeleteBth = id => {
        const confirm = window.confirm('Do you want to cancel this?')
        if (confirm) {
            axios.delete(`http://localhost:5000/delete/${id}`)
                .then(res => {
                    if (res.data.deletedCount === 1) {
                        const remainning = myOrders.filter(order => order._id !== id)
                        setMyOrders(remainning)
                        alert('one item deleted')
                    }


                })
        }
    }

    // Handle confirm btn
    const handleConfirmBtn = id => {
        axios.put('http://localhost:5000/change-status', { id: id })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    const remainning = myOrders.filter(order => order._id !== id)
                    const { status, ...rest } = myOrders.find(order => order._id === id)
                    const updated = { ...rest, status: 'confirmed' }

                    setMyOrders([updated, ...remainning])
                }
                else {
                    alert('Something went wrong, please try again later')
                }
            })
            .catch(error => console.log('got an error: ', error))

    }



    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>status</th>
                        <th>Confirm</th>
                        <th>Cancle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order => (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button
                                        className="confir-btn"
                                        disabled={order.status === 'confirmed' && true}
                                        onClick={() => handleConfirmBtn(order._id)}>
                                        <GiConfirmed />
                                    </button></td>
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

export default MyOrders;