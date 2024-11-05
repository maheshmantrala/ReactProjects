import React from 'react';

const ProductListing = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {products.map(product => (
                <div key={product.id} className="border rounded p-4 shadow bg-gray-200">
                    <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p>{product.description}</p>
                    <p className="text-lg font-semibold">${product.price}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-600 font-bold mr-2">{product.rating.rate} ★</span>
                        <span className="text-gray-600">({product.rating.count} reviews)</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
