import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import NavigationMenu from './components/NavigationMenu';
import Carrito from './components/Carrito';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<Carrito />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
