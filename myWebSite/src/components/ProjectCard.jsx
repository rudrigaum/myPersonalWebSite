// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'; // Vamos criar este arquivo de estilos em breve

function ProjectCard({ title, description, imageUrl, projectUrl, githubUrl, technologies }) {
  return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies && technologies.map((tech, index) => (
          <span key={index} className="technology-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver Projeto
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;