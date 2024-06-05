import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from './AdminNav';
import toast from 'react-hot-toast';

function Propage() {

    const navigate = useNavigate();
    const [category, setCategory] = useState("Cat");
    const [items, setitems] = useState([]);

    useEffect(() => {
        const fetchproduct = async () => {
            await axios.get(`http://localhost:5050/admin/api/viewproducts/${category}`)
                .then((res) => {
                    setitems(res.data.data)
                })
        }
        fetchproduct();
    }, [items]);

    const deletepro = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            axios.delete(`http://localhost:5050/admin/api/removeproduct/${id}`)
                .then(res => {
                    toast.success("Product deleted");
                })
                .catch(error => {
                    console.error("Error deleting product:", error);
                });
        }
    }
    const categories = ["Cat", "Dog", "Bird", "Fish"];

    const handleClick = (category) => {
        setCategory(category);
    };

    return (
        <>
            <AdminNav />

            <div className="w-full flex flex-wrap justify-center">
                {categories.map((category) => (
                    <div key={category} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                        <div className="btn btn-ghost w-full h-full" onClick={() => handleClick(category)}>
                            {category}
                        </div>
                    </div>
                ))}
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
                                            <button className='btn btn-error mr-3' onClick={e => deletepro(item._id)}>Delete</button>
                                            <button className='btn btn-outline btn-warning' onClick={() => navigate(`productedit/${item._id}`)}>Edit</button>
                                        </div>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Propage;