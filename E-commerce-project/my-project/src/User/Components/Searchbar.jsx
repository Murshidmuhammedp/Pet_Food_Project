import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../../App';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

function Searchbar() {
    const navigate = useNavigate();
    const { search } = useContext(Mycontext);
    const [data, setdata] = useState("");

    useEffect(() => {
        const fetchproduct = async () => {
            await axios.get(`http://localhost:5050/user/api/products/category/${search}`)
                .then((res) => {
                    setdata(res.data.data)
                })
        }
        fetchproduct();
    }, [search])

    return (
        <div>
            <Navbar />
            <div className='bg-yellow-300  flex items-center justify-center'>
                <div className='flex justify-evenly flex-wrap'>
                    {data && data.map((data) => (
                        <div className="card w-80 bg-white shadow-xl text-black flex m-3">
                            <figure className="px-10 pt-10">
                                <img src={data.productImage} alt="petfood" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h4>{data.category} Food</h4>
                                <h2 className="card-title">{data.title}</h2>
                                <div className="text-xl font-bold">₹{data.price}</div>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={() => navigate(`/detailspage/${data._id}`)}>Show more</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Searchbar