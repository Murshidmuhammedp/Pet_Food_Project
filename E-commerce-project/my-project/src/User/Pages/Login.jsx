import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

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
            <div>
                <div className="navbar bg-white shadow-md p-4">
                    <div className='flex-1'>
                        <button onClick={() => { navigate('/') }} className='text-2xl font-serif font-bold text-blue-600'>PetPro</button>
                    </div>
                    <div className="flex-none">
                        <div className='dropdown dropdown-hover'>
                            <button tabIndex={0} className='btn btn-ghost text-xl' role='button'>User</button>
                            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white text-gray-700 rounded-box w-52'>
                                <li><a className='text-lg hover:bg-gray-100'
                                    onClick={() => {
                                        navigate('/AdminLogin')
                                    }}
                                >Admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hero min-h-screen bg-gray-100">
                    <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">

                        <div className="card w-full max-w-sm shadow-2xl bg-white p-6 rounded-lg">
                            <form className="card-body" onSubmit={proceedlogin}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">E-mail</span>
                                    </label>
                                    <input type="text" placeholder="E-mail" className="input input-bordered bg-white" required onChange={e => setemail(e.target.value)} />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered bg-white" required onChange={e => setpassword(e.target.value)} />

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary w-full">Login</button>
                                </div>
                            </form>
                            <div className="mt-6">
                                <button className="btn btn-secondary w-full" onClick={() => navigate('/registrationform')}>Create new account</button>
                            </div>
                        </div>
                        <div className="text-center lg:text-left lg:mr-12">
                            <h1 className="text-5xl font-bold text-blue-600">Pet Foods</h1>
                            <p className="py-6 text-gray-700">“The best way to show your love for your pet is by feeding them nutritious and high-quality food.” </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login