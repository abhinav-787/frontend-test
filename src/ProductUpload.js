import React, { useState } from 'react';

function ProductUpload({ onAddProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price,
      image: image ? URL.createObjectURL(image) : null,
    };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <form className="product-upload" onSubmit={handleSubmit}>
      <h2>Upload Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductUpload; 