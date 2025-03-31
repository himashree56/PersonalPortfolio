import React from 'react'
import Card from '../ui/Card'
import '../styles/components.css'
import '../styles/global.css'
import '../styles/variables.css'
import '../styles/neobrutalism.css'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Coffee Website",
      description: "A seamless browsing experience for customers to explore a coffee shop’s diverse menu",
      image: "/images/CoffeeWebsite.png",
      technologies: ['HTML','CSS'],
      liveUrl: "  https://lnkd.in/gPvSmfNy",
      githubUrl: "https://github.com/himashree56/CoffeWebsite.git"
    },
    {
      id: 2,
      title: "Innomatics Website Clone",
      description: "A Clone of Innomatics Website",
      image: "/images/Innomatics.jpg",
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: " https://lnkd.in/gSgi6VJW",
      githubUrl: "https://github.com/himashree56/InnomaticsClone.git"
    },
    {
      id: 3,
      title: "Todo App",
      description: "A minimalist todo application with task categorization and Task Tracking Functionalities",
      image: "/images/Todo.png",
      technologies: ["React"],
      liveUrl: " https://lnkd.in/gYbkt2HA",
      githubUrl: "https://github.com/himashree56/TodoList.git"
    },
    {
        id: 4,
        title: "Memory Game",
        description: "My New Basic Memory Match Game",
        image: "/images/MemoryMatchGame.png",
        technologies: ["JavaScript", "HTML", "CSS"],
        liveUrl: " https://lnkd.in/gEZCm38x",
        githubUrl: "https://github.com/himashree56/MemoryGame.git"
      },
      {
        id: 5,
        title: "TECHZWONE - YOUR ONE-STOP SHOP FOR THE LATEST TECH!",
        description: "My latest e-commerce platform designed to offer a seamless shopping experience for electronics enthusiasts",
        image: "/images/E-Commerce.png",
        technologies: ["JavaScript", "HTML", "CSS"],
        liveUrl: " https://lnkd.in/gu6_hnMa",
        githubUrl: "https://github.com/himashree56/Ecommerce.git"
      },
      {
        id: 6,
        title: "Personal Portfolio",
        description: "A personal portfolio website showcasing projects, skills, and achievements with a responsive and modern design",
        image: "/images/PeraonalPortfolio.png",
        technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
        liveUrl: "https://personal-portfolio-omega-ashy.vercel.app",
        githubUrl: "https://github.com/himashree56/PersonalPortfolio.git"
      },
  ]

  return (
    <section className="projects-section">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Check out some of my recent work
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <Card 
              key={project.id} 
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
