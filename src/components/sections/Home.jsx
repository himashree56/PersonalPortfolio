import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import '../styles/components.css';
import '../styles/global.css';
import '../styles/variables.css';
import '../styles/neobrutalism.css';
import ProfilePic.png from './public/images';

const roles = [
  { title: "ML & Full-Stack Developer", description: "Building intelligent applications with AI & modern web technologies." },
  { title: "AI Researcher", description: "Exploring cutting-edge AI innovations and pushing technological boundaries." },
  { title: "Web Developer & Designer", description: "Creating sleek, responsive, and user-friendly digital experiences." },
  { title: "Open Source Contributor", description: "Empowering the developer community through open collaboration." },
];

const SimpleTypewriter = ({ text, typingSpeed = 100, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    setDisplayText('');
    const typeText = (index = 0) => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        setTimeout(() => {
          typeText(index + 1);
        }, typingSpeed);
      }
    };
    
    typeText();
  }, [text, typingSpeed]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  return (
    <span>
      {displayText}
      <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
    </span>
  );
};
const DescriptionFade = ({ text }) => {
  const [opacity, setOpacity] = useState(1);
  const [currentText, setCurrentText] = useState(text);
  
  useEffect(() => {
    setOpacity(0);
    
    const timer = setTimeout(() => {
      setCurrentText(text);
      setOpacity(1);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [text]);
  
  return (
    <p 
      className="hero-description"
      style={{ 
        opacity: opacity,
        transition: 'opacity 0.3s ease'
      }}
    >
      {currentText}
    </p>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Himasree Panku</span>
            <span className="role" style={{
              display: 'block',
              minHeight: '1.5em',
              position: 'relative'
            }}>
              <SimpleTypewriter 
                text={roles[currentIndex].title}
                key={`role-${currentIndex}`}
              />
            </span>
          </h1>
          
          <DescriptionFade 
            text={roles[currentIndex].description}
            key={`desc-${currentIndex}`}
          />
          
          <div className="hero-buttons">
            <Button as={Link} to="/projects" variant="primary" aria-label="View My Projects">
              View My Work
            </Button>
            <Button as={Link} to="/contact" variant="primary" aria-label="Contact Me">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/public/images/ProfilePic.png/"
            alt="Himasree Panku - ML & Full-Stack Developer"
            loading="lazy" className='image-container'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
