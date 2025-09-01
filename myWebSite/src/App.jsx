// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importe seus componentes de página aqui
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Defina suas rotas aqui */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />

        {/* Rota para página não encontrada (opcional) */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      {/* O Footer (rodapé) pode vir aqui */}
      {/* Você pode criar um componente Footer em src/components/Footer.jsx */}
    </Router>
  );
}

export default App;