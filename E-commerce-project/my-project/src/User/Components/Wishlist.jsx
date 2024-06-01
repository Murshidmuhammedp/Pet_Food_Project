import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Wishlist() {
  const [wishlist, setwishlist] = useState([]);

  useEffect(() => {
    const fetchproduct = async () => {
      const response = await axios.get(`http://localhost:5050/user/api/wishlist/${localStorage.getItem("userId")}`)
      setwishlist(response.data);
    }
    fetchproduct();
  }, []);

  // console.log(localStorage.getItem("userId"));
  return (
    <>
      <div style={{ backgroundColor: 'white' }} className='w-[100%] h-[100vh] overflow-scroll'>
        <h1 className='text-5xl text-blue-800 font-bold bg-white'>WishList</h1>
        {wishlist && wishlist.map((item) => (
          <div className="card w-90 glass ml-[100px] mt-[60px] float-left ">
            <figure><img width={200} height={200} src={item.productId.productImage} alt="car!" /></figure>
            <div className="card-body">
              <h2 className='text-black font-bold'>{item.productId.category} Food</h2>
              <div  className=' w-[190px] h-[20px] mb-4'><h2 className="card-title text-black text-sm ">{item.productId.title}</h2></div>
              
              <div className="text-xl font-bold text-black">₹{item.productId.price}</div>
              <div className="card-actions justify-end">
                <button className="btn btn-outline text-black">Add Cart</button>
                <button className="btn btn-outline text-black">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wishlist