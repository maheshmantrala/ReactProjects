import React, { useState, useEffect } from 'react';
import CategoryFilter from './Components/CategoryFilter';
import ProductListing from './Components/ProductsListing';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    // Fetch product data from API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched products:', data); // Console log the data
                setProducts(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const categories = ['All', ...new Set(products.map(product => product.category))];
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-center text-orange-600">Simple E-Commerce Store</h1>
                <CategoryFilter 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                />
                {loading ? <p>Loading products...</p> : <ProductListing products={filteredProducts} />}
            </main>
            <Footer />
        </div>
    );
};

export default App;
