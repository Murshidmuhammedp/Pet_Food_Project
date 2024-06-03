import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../../App';
import axios from 'axios';

function Navbar() {
    const [length, setlength] = useState()
    const { setcate, setfilter, filter, setsearch } = useContext(Mycontext)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchproduct = async () => {
            await axios.get(`http://localhost:5050/user/api/byid/${localStorage.getItem("userId")}`)
                .then((res) => {
                    setlength(res.data.data.cart.length);
                })
        }
        fetchproduct();
    }, [length])
    return (

        <div className="navbar bg-base-100 z-40">
            <div className='navbar-start'>
                <div className='dropdown dropdown-hover'>
                    <div tabIndex={0} className='btn btn-ghost' role='button'><h1 className='text-2xl'>Category</h1></div>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box sm:w-52'>
                        <li ><a className='text-lg'
                            onClick={() => {
                                setcate("Cat")
                                navigate('/category')
                            }}
                        >Cat</a>
                        </li>
                        <li><a className='text-lg'
                            onClick={() => {
                                setcate("Dog")
                                navigate('/category')
                            }}
                        >Dog</a>
                        </li>
                        <li><a className='text-lg'
                            onClick={() => {
                                setcate("Birds")
                                navigate('/category')
                            }}
                        >Birds</a>
                        </li>
                        <li><a className='text-lg'
                            onClick={() => {
                                setcate("fish")
                                navigate('/category')
                            }}
                        >Fish</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-2xl font-serif font-bold text-red-600'><button onClick={() => { navigate('/') }}>PetPro</button></div>
            <div className="navbar-end">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"
                        onChange={e => setsearch(e.target.value)} onClick={() => navigate('/searchbar')} />
                </div>
                <div className="rating gap-1">
                    <input type="radio" name="rating-1" className="mask mask-heart bg-red-500" onClick={() => { navigate("/wishlist") }} />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => { navigate('/Addcart') }} >
                        <div className="indicator" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            {length ? <span className="badge badge-sm indicator-item bg-blue-300 text-black">{length}</span> : null}
                        </div>
                    </div>
                </div>
                {localStorage.getItem("user.name") ? <h1 className='font-bold'>{localStorage.getItem('user.name')}</h1> : localStorage.getItem('usernew') ? <h1 className='font-bold'>Admin</h1> : <h1 className='font-bold'>User</h1>}

                <div className="dropdown dropdown-end">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {localStorage.getItem("user.name") ?
                            <li onClick={() => {
                                navigate('/login')
                                localStorage.clear()
                            }}><a>Logout</a></li> : <li onClick={() => navigate("/login")}><a>Login</a></li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar