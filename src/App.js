import React, { useState } from 'react';
import './App.css';
import ProductUpload from './ProductUpload';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Manager</h1>
      </header>
      <main className="App-main">
        <ProductUpload onAddProduct={handleAddProduct} />
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
