import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import toast from 'react-hot-toast';

function Addcart() {

    const navigate = useNavigate();

    const [items, setitems] = useState([])
    let [price, setprice] = useState(0)

    let UserId = localStorage.getItem("userId");
    useEffect(() => {
        const fetchproduct = async () => {
            await axios.get(`http://localhost:5050/user/api/cart/${UserId}`)
                .then(response => {
                    setitems(response.data);
                })
        }
        fetchproduct();
    }, [items])

    const remove = (id) => {
        axios.delete(`http://localhost:5050/user/api/${UserId}/cart/${id}/remove`)
            .then(res => {
                toast.success("Product removed successfully");
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    }

    const userPayment = async () => {
        try {
            const res = await axios.post(`http://localhost:5050/user/api/${UserId}/payment`);
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

    const handleIncrement = async (id) => {
        await axios.post(`http://localhost:5050/user/api/${UserId}/cart/${id}/increment`);
    };

    const handleDecrement = async (id) => {
        await axios.post(`http://localhost:5050/user/api/${UserId}/cart/${id}/decrement`);
    };

    return (
        <>
            <Navbar />
            <div className=' bg-gray-100 pt-5'>
                {items && items?.map(value => {
                    price += (value?.productId.price * value?.quantity)
                    return (
                        <div key={value?.productId._id} className="bg-white shadow-xl flex flex-col md:flex-row mb-5 text-start md:h-[300px] w-full md:w-[1000px] mx-auto md:m-5">
                            <figure className="w-full md:w-1/3">
                                <img width={300} height={300} src={value?.productId.productImage} alt={value?.productId.title} className="object-cover w-full h-full" />
                            </figure>
                            <div className="w-full md:w-2/3 p-4 md:pt-[50px]">
                                <h2 className="text-2xl font-bold text-black">{value?.productId.title}</h2>
                                <p className="text-md text-black">{value?.productId.category} Food</p>
                                <div className="flex items-center mt-4">
                                    <button
                                        className="px-2 py-1 h-[30px] w-[30px] border-2 border-black text-black"
                                        onClick={() => handleDecrement(value?.productId._id)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2 font-bold text-black">{value?.quantity}</span>
                                    <button
                                        className="px-2 py-1 h-[30px] w-[30px] border-2 border-black text-black"
                                        onClick={() => handleIncrement(value?.productId._id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-xl font-bold text-black my-5">₹{value?.productId.price * value?.quantity}</p>
                                <div className="mt-4 flex justify-start">
                                    <button
                                        className="btn btn-outline text-black"
                                        onClick={() => remove(value.productId._id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="p-4">
                <h1 className='font-bold text-4xl'>Sub Total : ₹ {price} /-</h1>
                {items.length === 0 ? (
                    <button className="btn btn-success" onClick={() => navigate('/Products')}>Add Product</button>
                ) : (
                    <button className="btn btn-success" onClick={userPayment}>Buy Now</button>
                )}
            </div>
        </>
    )
}

export default Addcart