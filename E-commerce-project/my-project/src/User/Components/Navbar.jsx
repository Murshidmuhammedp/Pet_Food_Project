import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../App';
import axios from 'axios';

function Navbar() {
    const [length, setLength] = useState();
    const { setcate, setfilter, filter, setsearch, cartlength } = useContext(Mycontext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            await axios.get(`http://localhost:5050/user/api/byid/${localStorage.getItem("userId")}`)
                .then((res) => {
                    setLength(res.data.data.cart.length);
                });
        };
        fetchProduct();
    }, []);

    return (
        <div className="navbar bg-white p-4 shadow-lg text-gray-700">
            <div className="flex-1 flex items-center">
                <div className="dropdown dropdown-hover">
                    <button tabIndex={0} className="btn btn-ghost text-lg" role="button">
                        <h1 className="text-gray-900">Category</h1>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white text-gray-700 rounded-box w-52">
                        {['Cat', 'Dog', 'Birds', 'Fish'].map(category => (
                            <li key={category}>
                                <a className="text-lg hover:bg-gray-100"
                                    onClick={() => { setcate(category); navigate('/category'); }}>
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className="text-lg font-serif font-bold text-blue-600 mx-auto md:mx-4"
                    onClick={() => { navigate('/') }}
                >
                    PetPro
                </button>
            </div>
            <div >
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        onChange={e => setsearch(e.target.value)}
                        onClick={() => navigate('/searchbar')}
                    />
                </div>
                <div className='dropdown dropdown-end'>
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                        onClick={() => { navigate("/wishlist") }}
                    >
                        <div className='indicator'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                                />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                        onClick={() => { navigate('/Addcart') }}
                    >
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            {length && <span className="badge badge-sm indicator-item bg-blue-600 text-white">{length}</span>}
                        </div>
                    </button>
                </div>
                <h1 className="font-bold hidden md:block">
                    {localStorage.getItem("user.name") || (localStorage.getItem('usernew') ? 'Admin' : 'User')}
                </h1>
                <div className="dropdown dropdown-end">
                    <button tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="User Avathar" src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" />
                        </div>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white text-gray-700 rounded-box w-52">
                        <li onClick={() => { navigate('/Orderdetails'); }}>
                            <a>Orders</a>
                        </li>
                        {localStorage.getItem("user.name") ? (
                            <li onClick={() => {
                                navigate('/login');
                                localStorage.clear();
                            }}>
                                <a>Logout</a>
                            </li>
                        ) : (
                            <li onClick={() => navigate("/login")}>
                                <a>Login</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
