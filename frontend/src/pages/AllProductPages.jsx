// src/pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const AllProductsPages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
    // Example: fetch('/api/products')
    // .then(response => response.json())
    // .then(data => setProducts(data));
    // For testing purposes, you can initialize with mock data
    setProducts([
      {
        name: 'Product 1',
        company: 'Company A',
        category: 'Electronics',
        price: 99.99,
        rating: 4.5,
        discount: 10,
        availability: 'In Stock',
      },
      // Add more products here
    ]);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPages;
