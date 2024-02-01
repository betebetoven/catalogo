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
          <Link to="/mens-clothing" className="menu-item" onClick={toggleMenu}>
            Men's Clothing
          </Link>
          <Link to="/womens-clothing" className="menu-item" onClick={toggleMenu}>
            Women's Clothing
          </Link>
          {/* Add additional menu items as needed */}
        </div>
      )}
    </div>
  );
}

export default NavigationMenu;
