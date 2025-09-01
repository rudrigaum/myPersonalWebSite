import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rodrigo Cerqueira Reis. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/rudrigaum" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rodrigocerqueirareis/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:rodrigocerqueirareis@gmail.com" target="_blank" rel="noopener noreferrer">
            E-mail
          </a>
          <a href="https://wa.me/5571991017351" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;