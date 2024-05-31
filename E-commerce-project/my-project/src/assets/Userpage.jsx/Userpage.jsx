import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminNav from '../Adminside/AdminNav';

function Userpage() {

    const [users, setusers] = useState("");
    let [count, setcount] = useState(0);

    useEffect(() => {
        const fetchproduct = async () => {
            const response = await axios.get('http://localhost:5050/admin/api/usersdata')
            setusers(response.data.data);
        }
        fetchproduct();
    })

    const handleblock = (value) => {
        axios.patch(`http://localhost:5050/admin/api/user/B&U/${value._id}`);
    }

    return (
        <>
            <AdminNav />

            <div data-theme="light" className="h-screen overflow-scroll">
                <table className="table table-zebra">
                    <thead>
                        <tr className='text-xl'>
                            <th></th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    {users && users.map(value => {
                        count += 1;
                        return (
                            <tbody key={value._id}>
                                <tr>
                                    <th>{count}</th>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.number}</td>
                                    <td>
                                        {value.isDeleted == true ? <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={e => handleblock(value)}>UnBlock</button> : <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={e => handleblock(value)}>Block</button>}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default Userpage