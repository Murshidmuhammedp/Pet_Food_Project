import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CategoryWise from './Categoryshow';
import { Mycontext } from '../../App';

 
function Products() {
    const [items, setitems] = useState([]);
    const { setcate, setfilter, filter, setsearch, cartlength } = useContext(Mycontext)
   const navigate=useNavigate()

    useEffect(() => {
        const fetchproduct = async () => {
            const response = await axios.get('http://localhost:5050/user/api/products')
            setitems(response.data.data);
        }
        fetchproduct();
    }, []);

    const categories = [
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Dog_payday.png?v=1680288959', title: 'DOG' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/cat_payday.png?v=1680288959', title: 'CAT' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsfJ_ltVj3dn-aPTKdAHgLX5aKB1xqDrZqK2wzvcMjLFg08YP7NVKHD3_MtTuh7P94JY&usqp=CAU', title: 'BIRDS' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHlcmASZgNOAA0mtIwob78oSLwGP1PybjDQ&s', title: 'FISH' }
    ];

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