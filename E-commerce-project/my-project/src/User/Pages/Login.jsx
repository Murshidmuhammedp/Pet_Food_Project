import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Mycontext } from '../../App';

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { setcate, setfilter, filter, setsearch } = useContext(Mycontext)


    const navigate = useNavigate();

    const proceedlogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/user/api/login", { email, password })
            if (response.status === 200) {
                const userCookie = response.data.token;
                const userData = response.data.data;
                localStorage.setItem("userToken", userCookie);
                localStorage.setItem("userId", userData._id);
                localStorage.setItem("user.name", response.data.data.username);
                alert(response.data.message)
                navigate('/')
            }
            if (response.status === 400) {
                alert(response.data.message);
            }
            if (response.status === 401) {
                alert(response.data.message);
            }
            if (response.status === 404) {
                alert(response.data.message);
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <>
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
                    <div className='dropdown dropdown-hover'>
                        <div tabIndex={0} className='btn btn-ghost' role='button'><h1 className='text-2xl'>User</h1></div>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box sm:w-52'>
                            <li><a className='text-lg'
                                onClick={() => {
                                    navigate('/AdminLogin')
                                }}
                            >Admin</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                    </div>
                </div>
            </div>

            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-150">
                        <form className="card-body" onSubmit={proceedlogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">E-mail</span>
                                </label>
                                <input type="text" placeholder="E-mail" className="input input-bordered" required onChange={e => setemail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required onChange={e => setpassword(e.target.value)} />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mt-12">
                            <button className="btn btn-success" onClick={() => navigate('/registrationform')}>Create new account</button>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Pet Foods</h1>
                        <p className="py-6">“The best way to show your love for your pet is by feeding them nutritious and high-quality food.” </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login