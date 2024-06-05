import React from 'react';

const CategoryWise = ({ imageUrl, title }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mr-12">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800 mr-12">{title}</p>
        </div>
    );
};

export default CategoryWise
