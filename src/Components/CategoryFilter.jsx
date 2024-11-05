import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => (
    <div className="flex justify-center mb-4 space-x-2 mb-6">
        {categories.map(category => (
            <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200'} hover:scale-105 transform transition duration-150`}
            >
                {category}
            </button>
        ))}
    </div>
);

export default CategoryFilter;
