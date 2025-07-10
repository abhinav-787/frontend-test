import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="products">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              {product.image && <img src={product.image} alt={product.name} className="product-image" />}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList; 