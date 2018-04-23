import React from 'react';
import './Header.css';

const Header = ({ children }) => (
  <header className="Header w-100">
    {children}
  </header>
);
export default Header;
