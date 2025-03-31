import React from 'react'
import Button from './Button'

const Card = ({ 
  title, 
  description, 
  image, 
  technologies = [], 
  liveUrl, 
  githubUrl 
}) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="card-links">
          <Button as="a" href={liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="card-button">
            View Live
          </Button>
          <Button as="a" href={githubUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="card-button">
            View Code
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card