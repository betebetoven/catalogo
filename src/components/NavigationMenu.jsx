import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation-menu-container">
      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {isOpen && (
        <div className="menu-list">
          <Link to="/" className="menu-item" onClick={toggleMenu}>
            Dulce
          </Link>
          <Link to="/" className="menu-item" onClick={toggleMenu}>
            Salado
          </Link>
          <Link to="/carrito" className="menu-item" onClick={toggleMenu}>
            Carrito
            </Link>
          {/* Add additional menu items as needed */}
        </div>
      )}
    </div>
  );
}

export default NavigationMenu;
