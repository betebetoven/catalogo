// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firestore from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Makepurchase from '../pedido/makepurchase';
import AddToCartButton from './AddToCartButton';

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
    details += `Sabor: ${color}\n`;
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
    <div className="product-details">
      <img src={product.pic} alt={product.nombre} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.nombre}</h2>
        <p className="product-meta">Category: {product.categoria}</p>
        <p className="product-meta">Price: ${product.precio}</p>
        <p className="product-meta">Description: {product.description}</p>

        <label htmlFor="size-select" className="product-meta">Tamaño:</label>
<select id="size-select" className="product-select" value={selectedSize} onChange={handleSizeChange}>
  <option disabled value="">{selectedSize ? selectedSize : "Select Size"}</option>
  {product.size.map((size) => (
    <option key={size} value={size}>{size}</option>
  ))}
</select>

<label htmlFor="color-select" className="product-meta">Sabor:</label>
<select id="color-select" className="product-select" value={selectedColor} onChange={handleColorChange}>
  <option disabled value="">{selectedColor ? selectedColor : "Select Color"}</option>
  {product.color.map((color) => (
    <option key={color} value={color}>{color}</option>
  ))}
</select>

        <Makepurchase text={formatProductDetailsForWhatsApp(product, selectedSize, selectedColor)} />
        <AddToCartButton productId={product.id} size={selectedSize} color={selectedColor} />
      </div>
    </div>
  );
}

export default ProductDetailPage;
