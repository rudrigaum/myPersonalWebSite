// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Importe o ProjectCard
import './Projects.css'; // Vamos criar este arquivo de estilos em breve

function Projects() {
  // Dados de exemplo para seus projetos
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Desenvolvimento de uma plataforma de e-commerce completa com carrinho de compras, autenticação de usuário e integração de pagamentos.',
      imageUrl: 'https://via.placeholder.com/300x180?text=E-commerce', // Substitua por suas imagens
      projectUrl: 'https://seuecommerce.com', // Substitua pelo link do projeto
      githubUrl: 'https://github.com/seu-usuario/ecommerce-repo', // Substitua pelo link do GitHub
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Blog Pessoal Interativo',
      description: 'Um blog responsivo com sistema de comentários, categorias de posts e um painel de administração simples.',
      imageUrl: 'https://via.placeholder.com/300x180?text=Blog', // Substitua por suas imagens
      projectUrl: 'https://seublog.com', // Substitua pelo link do projeto
      githubUrl: 'https://github.com/seu-usuario/blog-repo', // Substitua pelo link do GitHub
      technologies: ['Next.js', 'Tailwind CSS', 'Firebase']
    },
    {
      id: 3,
      title: 'Aplicativo de Tarefas',
      description: 'Um aplicativo de lista de tarefas com funcionalidades de adicionar, remover, editar e marcar tarefas como concluídas.',
      imageUrl: 'https://via.placeholder.com/300x180?text=Tasks', // Substitua por suas imagens
      projectUrl: 'https://suas-tarefas.com', // Substitua pelo link do projeto
      githubUrl: 'https://github.com/seu-usuario/tasks-app', // Substitua pelo link do GitHub
      technologies: ['Vue.js', 'Vite', 'CSS Modules']
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Meus Projetos</h1>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;