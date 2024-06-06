import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../App';

function Categoryshow() {

    const { setcate, setfilter, filter, setsearch, cartlength } = useContext(Mycontext)
    const navigate = useNavigate();

    const categories = [
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Dog_payday.png?v=1680288959', title: 'DOG' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/cat_payday.png?v=1680288959', title: 'CAT' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsfJ_ltVj3dn-aPTKdAHgLX5aKB1xqDrZqK2wzvcMjLFg08YP7NVKHD3_MtTuh7P94JY&usqp=CAU', title: 'BIRDS' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHlcmASZgNOAA0mtIwob78oSLwGP1PybjDQ&s', title: 'FISH' }
    ];

    return (
        <>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Categories</h2>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
                {categories.map((value, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg ">
                                <img src={value.imageUrl} alt={value.title} className="w-full h-full object-cover cursor-pointer" onClick={() => { setcate(value.title); navigate('/category'); }} />
                            </div>
                            <p className="mt-4 text-lg font-semibold text-gray-800">{value.title}</p>
                        </div>
                    )
                })
                }
            </div>
        </>

    )
}

export default Categoryshow







