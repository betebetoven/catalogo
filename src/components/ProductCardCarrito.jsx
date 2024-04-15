// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, size, color }) {
    return (
      <div className="product-card apps-card">
        <Link className='nav-link' to={`/product/${product.id}`}>
        <img 
          src={product.pic} 
          alt={product.nombre} 
          className="product-image" // Apply the class here
        />
        <h3>{product.nombre}</h3>
        <p>Q{product.precio}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
        </Link>
        {/* Implement WhatsApp redirection here */}
      </div>
    );
  }
  
  export default ProductCard;