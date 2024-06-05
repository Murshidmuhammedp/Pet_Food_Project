import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';

function Detailspage() {
    const { userid } = useParams();
    const [detail, setdetail] = useState([]);
    const [ItemQuantity, setItemQuantity] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchproduct = async () => {
            const response = await axios.get(`http://localhost:5050/user/api/products/${userid}`)
            setdetail(response.data.data);
        }
        fetchproduct();

    }, []);

    const addcart = async () => {
        await axios.post(`http://localhost:5050/user/api/${localStorage.getItem("userId")}/cart/${userid}`)
            .then(res => alert(res.data.message));
      //  await axios.post(`http://localhost:5050/user/api/${localStorage.getItem("userId")}/cart/${userid}/increment`, { ItemQuantity });
    }

    return (
        <div>
            <Navbar />
            <div data-theme='light' className='h-screen flex items-center justify-center'>
                <div className=" items-center card card-side bg-base-200 shadow-xl">
                    <img src={detail.productImage} className='w-1/2' alt="Movie" />
                    <div className="card-body flex flex-col items-center">

                        <h2 className="card-title font-bold text-3xl">{detail.title}</h2>
                        <h2 className=' text-xl font-bold'>{detail.category} Food</h2>
                        <p>{detail.description}</p>
                        <label>Qty : <input type='number' onClick={e => setItemQuantity(e.target.value)}></input></label>
                        <div className="card-actions flex flex-col items-center">
                            <h1 className='text-3xl font-bold'> ₹ {detail.price * ItemQuantity}</h1>
                            {localStorage.getItem("userId") ? <button className="btn btn-primary" onClick={addcart}>Add To Cart</button> : <button className="btn btn-primary" onClick={() => navigate('/Login')}>Please Login</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detailspage;