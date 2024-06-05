import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function Orderdetails() {

    const [count, setcount] = useState(0);
    const [orders, setorders] = useState([])
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const orderDetails = async () => {
            await axios.get(`http://localhost:5050/user/api/${userId}/orderdetails`)
                .then((res) => setorders(res.data))
            //    .then((res)=>console.log(res.data)); 
        }
        orderDetails();
    }, [])


    return (

        <>
            <Navbar />
            <div className="w-full min-h-screen bg-gray-50 py-10">
                <div className="max-w-6xl mx-auto px-4">

                    {orders.length > 0 ? (
                        orders?.map((order, index) => (

                            <div key={index} className="mb-10 bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-700">Order Information</h3>
                                    <div className="mt-3 space-y-2 text-gray-700">
                                        <p><span className="font-medium text-gray-800">Order ID:</span> {order?.orderId}</p>
                                        <p><span className="font-medium text-gray-800">Date:</span> {order?.purchaseDate}</p>
                                        <p><span className={`font-medium text-gray-800 ${order?.Status === 'Delivered' ? 'text-green-500' : 'text-yellow-500'}`}>Status:</span> {order?.Status}</p>

                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-700">Items</h3>
                                    <div className="mt-4 space-y-4">
                                        {order?.ProductId?.map((item, index) => (
                                            <div key={index} className="p-4 bg-gray-100 rounded-lg flex items-center shadow-sm">
                                                <img src={item?.productImage} alt={item?.title} className="w-20 h-20 object-cover rounded-lg mr-4" />
                                                <div>
                                                    <p className="text-lg font-medium text-gray-800">{item?.title}</p>
                                                    <p className="text-gray-700">Price: ₹ {item?.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-blue-700">Total Cost</h3>
                                    <p className="mt-2 text-2xl font-bold text-gray-800">₹ {order?.totalPrice}</p>
                                </div>
                            </div>

                        ))
                    ) : (
                        <p className="text-gray-600">No orders found.</p>
                    )}
                </div>
            </div>
        </>

    )
}

export default Orderdetails