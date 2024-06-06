import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Products() {
    const [items, setitems] = useState([]);


    useEffect(() => {
        const fetchproduct = async () => {
            const response = await axios.get('http://localhost:5050/user/api/products')
            setitems(response.data.data);
        }
        fetchproduct();
    }, []);



    return (
        <>
            <div className="mb-10 flex flex-col items-center justify-center m-5">

            </div>

            <h1 className='text-5xl text-black font-bold bg-yellow-100'>Products</h1>
            <div className='flex justify-evenly flex-wrap bg-white'>
                {items.map((item) => (
                    <div key={item._id} className="card w-80 bg-white shadow-xl text-black flex m-3">
                        <figure className="px-10 pt-10">
                            <img src={item.productImage} alt="petfood" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h4>{item.category} Food</h4>
                            <h2 className="card-title">{item.title}</h2>
                            <div className="text-xl font-bold">₹{item.price}</div>
                            <div className="card-actions">
                                <Link to={`/detailspage/${item._id}`}><button className="btn btn-primary">Show more</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
{/* <button
className={`mask mask-heart w-6 h-6 ${wishlist.includes(item.id) ? 'bg-red-400' : 'bg-gray-300'}`}
onClick={() => handleWishlistChange(item.id)}
/> */}