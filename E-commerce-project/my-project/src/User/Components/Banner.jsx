import React from 'react'

function Banner() {
    return (
        <div className="w-full h-auto overflow-hidden">
            <div className="w-full h-[300px] carousel" data-theme='light'>
                <div className="carousel-item w-full">
                    <img src="https://headsupfortails.com/cdn/shop/collections/food_strip_banner.jpg?v=1717238850&width=1500" className="w-full h-auto" alt="Pet Food" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://tailsnation.com/cdn/shop/collections/New-Project-30-1.png?v=1671608009" className="w-full h-auto" alt="Pet Food" />
                </div>
            </div>
        </div>

    )
}

export default Banner