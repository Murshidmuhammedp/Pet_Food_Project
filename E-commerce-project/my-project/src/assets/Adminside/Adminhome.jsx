import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Propage from './Propage'
import Userpage from '../Userpage.jsx/Userpage'
import ProductEdit from './ProductEdit'
import Productadd from './Productadd'
import Tabwise from './Tabwise'

function Adminhome() {
    return (
        <div>
            {localStorage.getItem("adminToken") ?
                <Routes>
                    <Route path='/' element={<Productadd />}></Route>
                    <Route path='/propage' element={<Propage />}></Route>
                    <Route path='/userpage' element={<Userpage />}></Route>
                    <Route path='/tabwise' element={<Tabwise />}></Route>

                    <Route path='propage/productedit/:userid' element={<ProductEdit />}></Route>
                </Routes> : null}
        </div>
    )
}

export default Adminhome