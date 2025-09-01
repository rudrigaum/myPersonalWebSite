// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Rodrigo Cerqueira Reis</Link> {/* Ou o nome do seu portfólio */}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre" className="nav-link">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/projetos" className="nav-link">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;