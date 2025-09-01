// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Rodrigo</Link> {/* Ou o nome do seu portfólio */}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre" className="nav-link">Sobre Mim</Link>
        </li>
        <li className="nav-item">
          <Link to="/projetos" className="nav-link">Projetos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contato" className="nav-link">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;