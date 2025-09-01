import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rodrigo Cerqueira Reis. All rights reserved.</p>
        <div className="social-links">
          {/* Link para o GitHub com Ícone */}
          <a href="https://github.com/rudrigaum" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} /> {/* O atributo 'size' define o tamanho do ícone */}
          </a>

          {/* Link para o LinkedIn com Ícone */}
          <a href="https://www.linkedin.com/in/rodrigocerqueirareis" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>

          {/* Link para o E-mail com Ícone */}
          <a href="mailto:rodrigocerqueirareis@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="E-mail">
            <MdEmail size={24} />
          </a>

          {/* Link para o WhatsApp com Ícone */}
          <a href="https://wa.me/5571991017351" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;