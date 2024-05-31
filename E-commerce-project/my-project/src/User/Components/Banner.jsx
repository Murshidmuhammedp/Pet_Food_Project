import React from 'react'

function Banner() {
    return (
        <div  className="w-full h-screen overflow-hidden">
            <div className="w-width h-screen carousel" data-theme='light'>
                <div className="carousel-item w-full">
                    <img src="https://www.allaboutfeed.net/app/uploads/2020/12/001_225_IMG_17AAF008_Petfood_Image1-1024x683.jpg" className="w-full h-auto" alt="Pet Food" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://www.dial4trade.com/uploaded_files/helpimgs/top-10-pet-food-companies-and-brands-in-india-with-latest-price-list-2023-b053766.jpg" className="w-full h-auto" alt="Pet Food" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://cdn.thewirecutter.com/wp-content/media/2022/06/20220214_dogfood-2048px-2x1-1.jpeg?auto=webp&quality=75&crop=1.91:1&width=1200" className="w-full h-auto" alt="Pet Food" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://headsupfortails.com/cdn/shop/products/Mother_Kitten1-2kg-Front.jpg?v=1668677962&width=823" className="w-full h-auto" alt="Pet Food" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://en.petfoodenergy.com/wp-content/uploads/2022/01/cat-dog.jpg" className="w-full" alt="Pet Food" />
                </div>
            </div>
        </div>
    )
}

export default Banner