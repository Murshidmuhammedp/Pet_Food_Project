import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Orderdetails() {

    const [count, setcount] = useState(0);
    const [orders, setorders] = useState([])
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const orderDetails = async () => {
            const response = await axios.get(`http://localhost:5050/user/api/${userId}/orderdetails`);
            setorders(response);
            // console.log(orders, "orders");
            console.log(response);
        }
        orderDetails();
    }, [])

    // console.log(userId);

    return (
        <div>


            <div data-theme="light" className="h-screen overflow-scroll">
                <table className="table table-zebra">
                    <thead>
                        <tr className='text-xl'>
                            <th></th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    {orders && orders?.data?.map(value => {
                        count += 1;
                        return (
                            <tbody key={value._id}>
                                <tr>
                                    {/* <th>{count}</th> */}
                                    <td>{value.paymentId}</td>
                                    {/* <td>{value}</td>
                                    <td>{value}</td> */}
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

        </div>
    )
}

export default Orderdetails