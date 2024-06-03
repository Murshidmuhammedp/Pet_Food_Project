import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Addcart() {

    const navigate = useNavigate();

    const [items, setitems] = useState([])
    let [price, setprice] = useState(0)

    // let UserId = localStorage.getItem("userId");
    useEffect(() => {
        const fetchproduct = async () => {
            await axios.get(`http://localhost:5050/user/api/cart/${localStorage.getItem("userId")}`)
                .then(response => {
                    setitems(response.data);
                })
        }
        fetchproduct();
    }, [items])

    const remove = (id) => {
        axios.delete(`http://localhost:5050/user/api/${localStorage.getItem("userId")}/cart/${id}/remove`)
            .then(res => {
                toast.success("Product removed successfully");
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    }

    const userPayment = async () => {
        try {
            const res = await axios.post(`http://localhost:5050/user/api/${localStorage.getItem("userId")}/payment`);
            if (res.status === 200) {
                const url = res.data.url;
                const confirm = window.confirm("Redirecting to the payment gateway.Continue?");
                if (confirm) {
                    window.location.replace(url);
                }
            }
        } catch (error) {
            if (error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("An error occurred.Please try again.");
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex flex-wrap justify-evenly bg-yellow-200'>
                {items && items?.map(value => {
                    price += (value?.productId.price * value?.quantity)
                    return (
                        <div key={value?.productId._id}>
                            <div className="card card-compact w-80 m-2 bg-yellow-100 shadow-xl text-black" >
                                <figure><img src={value?.productId.productImage} alt="pet food" /></figure>
                                <div className="card-body">
                                    <h1 className="font-bold text-xl text-center">{value?.productId.title}</h1>
                                    <label className='font-bold'>Qty : {value?.quantity}</label>

                                    <h2 className='font-bold text-2xl'>₹ {value?.productId.price * value?.quantity}</h2>

                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={() => remove(value?.productId._id)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div>
                <h1 className='font-bold text-4xl'>Sub Total : ₹ {price} /-</h1>
                {items.length === 0 ? <button className="btn btn-success" onClick={() => navigate('/Products')}>Add Product</button> : <button className="btn btn-success" onClick={userPayment}>Buy Now</button>}
            </div>
        </>

    )
}

export default Addcart