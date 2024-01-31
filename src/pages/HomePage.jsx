// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import firestore from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mensCollection = collection(firestore, 'mens');
    getDocs(mensCollection).then((querySnapshot) => {
      const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
