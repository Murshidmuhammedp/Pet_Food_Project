import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Tabwise() {

    const [activeTab, setActiveTab] = useState('user');
    // User Tab

    const [users, setusers] = useState([]);
    let [count, setcount] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5050/admin/api/usersdata');
                setusers(response.data.data);
            } catch (error) {
                console.error("Error", error);
            };
        }
        fetchUsers();
    },);

    const handleblock = async (value) => {
            await axios.patch(`http://localhost:5050/admin/api/user/B&U/${value._id}`);
            toast.success(`${value.isDeleted === false ? 'Blocked ' : 'Unblocked '}user successfully`);
      
    };

    // Product Tab

    const navigate = useNavigate()

    const [category, setCategory] = useState("Cat")
    const [items, setitems] = useState([]);


    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5050/admin/api/viewproducts/${category}`);
                // .then((res) => {
                setitems(response.data.data);
                // });      
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchproducts();
    }, [category]);


    const deleteproduct = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5050/admin/api/removeproduct/${id}`);
                setitems(items.filter(item => item._id !== id));
                toast.success("Product deleted");
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    }

    return (
        <div data-theme="light" className='h-screen '>
            {/* User Controller Tab */}

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="User" checked={activeTab === 'user'}
                    onChange={() => setActiveTab('user')} />
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

                {/* Product Controller Tab */}

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Product" checked={activeTab === 'product'}
                    onChange={() => setActiveTab('product')} />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    <div className="w-full flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                            <div className="btn btn-ghost w-full h-full" onClick={() => setCategory("Cat")}>Cat</div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                            <div className="btn btn-ghost w-full h-full" onClick={() => setCategory("Dog")}>Dog</div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                            <div className="btn btn-ghost w-full h-full" onClick={() => setCategory("Birds")}>Bird</div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                            <div className="btn btn-ghost w-full h-full" onClick={() => setCategory("fish")}>Fish</div>
                        </div>
                    </div>
                    <div data-theme="light" className='h-screen overflow-scroll flex flex-wrap justify-evenly'>
                        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <table className="table table-xs w-full">
                                <thead>
                                    <tr className='text-xl'>
                                        <th className="px-4 py-2">Qty</th>
                                        <th className="px-4 py-2">Image</th>
                                        <th className="px-4 py-2">Product name</th>
                                        <th className="px-4 py-2">Details</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={item._id} className="border-b border-gray-200">
                                                <th className="px-4 py-2">{index + 1}</th>
                                                <td className="px-4 py-2"><img src={item.productImage} className="w-20 h-20 object-cover" /></td>
                                                <td className="px-4 py-2">{item.title}</td>
                                                <td className="px-4 py-2">{item.description}</td>
                                                <td className='px-4 py-2 font-bold'>₹{item.price}</td>
                                                <div className='px-4 py-2 flex items-center'>
                                                    <button className='btn btn-error mr-3' onClick={e => deleteproduct(item._id)}>Delete</button>
                                                    <button className='btn btn-outline btn-warning' onClick={() => navigate(`productedit/${item._id}`)}>Edit</button>
                                                </div>
                                            </tr>


                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Order" checked={activeTab === 'order'}
                    onChange={() => setActiveTab('order')} />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
        </div>
    )
}

export default Tabwise