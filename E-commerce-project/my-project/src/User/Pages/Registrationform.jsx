import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Registrationform() {

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState(0);
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const handlereg = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5050/user/api/register", { username, email, number, password })
            if (response.status === 201) {
                alert(response.data.message)
                navigate('/login');
            }
            if (response.status === 400) {
                alert(response.data.message)
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className='bg-blue-200 flex justify-center items-center h-screen bg-'>
            <div className='flex flex-col items-center justify-between  w-1/2 p-8 rounded-xl shadow-lg bg-white'>
                <div className='w-full'>
                    <h1 className="text-3xl text-black font-bold mb-4 text-center">Sign Up</h1>
                    <h3 className="text-lg text-center mb-8">It's quick and easy.</h3>

                </div>
                <form className='w-full' onSubmit={handlereg} >

                    <label  style={{backgroundColor:'white'}} className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input required type="text" className="input-field" placeholder="Username" value={username} onChange={e => setusername(e.target.value)} />
                    </label>
                    <label  style={{backgroundColor:'white'}} className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input required type="email" className="input-field " placeholder="Email" value={email} onChange={e => setemail(e.target.value)} />
                    </label>
                    <label  style={{backgroundColor:'white'}} className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill='currentColor'><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" /></svg>
                        <input required type="tel" className="input-field" placeholder="Phone Number" onChange={e => setnumber(e.target.value)} />
                    </label>
                    <label  style={{backgroundColor:'white'}} className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input required type="password" className="input-field" placeholder='Password' value={password} onChange={e => setpassword(e.target.value)} />
                    </label>
                    <button type='submit' className="btn btn-outline btn-success w-40  m-8 "><strong>Sign Up</strong></button>
                </form>

            </div>
        </div>

    )
}

export default Registrationform