import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

function Home() {
    return (
        <div className='bg-yellow-100'>
            <Navbar />
            <Banner />
            <Products />
            <Footer />
        </div>

    )
}

export default Home