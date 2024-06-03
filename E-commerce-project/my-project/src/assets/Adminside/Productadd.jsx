import axios from 'axios'
import React, { useState } from 'react'
import Navbar from '../../User/Components/Navbar'
import { useNavigate } from 'react-router-dom'
import AdminNav from './AdminNav'

function Productadd() {
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState(0)
    const navigate = useNavigate()

    const productreg = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
            const response = await axios.post("http://localhost:5050/admin/api/addproducts", { category, image, title, description, price }, config);
            if (response.status === 201) {
                alert(response.data.message);
            }

        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <>
            <div data-theme="light" className='h-screen'>
                <h1 className='text-3xl font-bold'>PRODUCT ADDING</h1>
                <form className='w-full flex flex-col items-center' onSubmit={productreg}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Name</span>
                        </div>
                        <input required type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" onChange={e => settitle(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Upload Product Image</span>
                        </div>
                        <input required type="file" placeholder="Product URL" className="input input-bordered w-full max-w-xs" onChange={e => setimage(e.target.files[0])} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select product Category</span>
                        </div>
                        <select className=" input input-bordered select select-bordered select-sm w-full max-w-xs" onChange={e => setcategory(e.target.value)}>
                            <option>Select category</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Birds">Bird</option>
                            <option value="fish">Fish</option>
                        </select>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Description</span>
                        </div>
                        <input required type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" onChange={e => setdescription(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Price</span>
                        </div>
                        <input required type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" onChange={e => setprice(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>
                <button type="submit" className="btn btn-info m-4" onClick={() => navigate('propage')}>Go to product page</button>
                <button type="submit" className="btn btn-info m-4" onClick={() => navigate('userpage')}>Go to User page</button>

            </div >
        </>
    )
}

export default Productadd