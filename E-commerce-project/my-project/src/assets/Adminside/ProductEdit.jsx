import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNav from './AdminNav';
import toast from 'react-hot-toast';

function ProductEdit() {
    const navigate = useNavigate();
    const { userid } = useParams();

    const [title, settitle] = useState("")
    const [productImage, setproductImage] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")

    useEffect(() => {
        const fetchproduct = async () => {
            const response = await axios.get(`http://localhost:5050/admin/api/viewproduct/${userid}`);
            settitle(response.data.data.title)
            setproductImage(response.data.data.productImage)
            setcategory(response.data.data.category)
            setdescription(response.data.data.description)
            setprice(response.data.data.price)
        }
        fetchproduct();
    }, [])

    const handleedit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:5050/admin/api/updateproduct/${userid}`, { title, category, productImage, description, price })
            .then(res => toast.success("Edit Successfully"))
        navigate('/admin/propage')
    }


    return (
        <div>
            <AdminNav />


            <div data-theme="light" className='h-screen '>
                <h1 className='text-3xl font-bold'>Product Editing</h1>
                <form className='w-full flex flex-col items-center' onSubmit={handleedit}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Name</span>
                        </div>
                        <input required type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" value={title} onChange={e => settitle(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product URL</span>
                        </div>
                        <input required type="text" placeholder="Product URL" className="input input-bordered w-full max-w-xs" value={productImage} onChange={e => setproductImage(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select product Category</span>
                        </div>
                        <select className=" input input-bordered select select-bordered select-sm w-full max-w-xs" value={category} onChange={e => setcategory(e.target.value)}>
                            <option>Select category</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Birds">Bird</option>
                            <option value="fish">Fish</option>
                        </select>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Description</span>
                        </div>
                        <input required type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" value={description} onChange={e => setdescription(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Price</span>
                        </div>
                        <input required type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" value={price} onChange={e => setprice(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default ProductEdit