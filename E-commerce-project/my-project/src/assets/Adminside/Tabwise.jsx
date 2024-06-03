import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Tabwise() {
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
        <div data-theme="light" className='h-screen '>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="User" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
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
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Product" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Order" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
        </div>
    )
}

export default Tabwise