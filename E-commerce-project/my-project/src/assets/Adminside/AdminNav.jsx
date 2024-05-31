import React from 'react'
import { useNavigate } from 'react-router-dom'


function AdminNav() {
    const navigate = useNavigate()
  return (
    <div>
         <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold">Admin</a>
                </div>
                <div className="flex-none gap-2 flex items-center justify-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 sm:w-auto">
                            <li><a onClick={() => navigate('/')}>Home page</a></li>
                            <li><a className="justify-between" onClick={() => navigate('/admin/userpage')}>User Detail's</a></li>
                            <li onClick={() => navigate('/admin')}><a>Add Product</a></li>
                            <li onClick={() => navigate('/admin/propage')}><a>Product Details</a></li>
                            <li onClick={() => {
                                navigate('/login')
                                localStorage.clear()
                            }}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminNav