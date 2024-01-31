// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firestore from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Makepurchase from '../pedido/makepurchase';

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { productId } = useParams();

  useEffect(() => {
    const productRef = doc(firestore, 'mens', productId); // Adjust collection as needed
    getDoc(productRef).then((doc) => {
      if (doc.exists()) {
        setProduct({ id: doc.id, ...doc.data() });
      } else {
        // Handle the case where the product does not exist
      }
    });
  }, [productId]);

  function formatProductDetailsForWhatsApp(product, size, color) {
    let details = `Product: ${product.nombre}\n`;
    details += `Category: ${product.categoria}\n`;
    details += `Price: $${product.precio}\n`;
    details += `Description: ${product.description}\n`;
    details += `Size: ${size}\n`;
    details += `Color: ${color}\n`;
    details += `Id: ${product.id}\n`;
    return details;
  }

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={product.pic} alt={product.nombre} className="product-image" />
      <h2>{product.nombre}</h2>
      <p>Category: {product.categoria}</p>
      <p>Price: ${product.precio}</p>
      <p>Description: {product.description}</p>

      <p>Choose Size:</p>
      <select value={selectedSize} onChange={handleSizeChange}>
        {product.size.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>

      <p>Choose Color:</p>
      <select value={selectedColor} onChange={handleColorChange}>
        {product.color.map((color) => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>

      <Makepurchase text={formatProductDetailsForWhatsApp(product, selectedSize, selectedColor)} />
    </div>
  );
}

export default ProductDetailPage;
