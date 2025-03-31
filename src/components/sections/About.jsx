import React from 'react'
import '../styles/components.css'
import '../styles/global.css'
import '../styles/variables.css'
import '../styles/neobrutalism.css'
const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Flutter","MS Excel","Power BI","Tableau",
    "Node.js", "Express", "MongoDB", "Dart","Responsive Design",
     "Git", "NLP","C","C++",'Python',"Java","SQL","Communication",
    
  ]
  
  return (
    <section className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
            I'm a passionate Full-Stack Developer and Machine Learning with a focus on building intelligent, scalable, and user-centric applications. With a strong foundation in both AI/ML and full-stack technologies, I thrive on transforming complex problems into innovative digital solutions.
            </p>
            <p>
            My journey began during my studies in Artificial Intelligence and Machine Learning, where I developed a deep interest in leveraging data-driven insights to solve real-world challenges. Since then, I’ve been continuously expanding my expertise in machine learning, deep learning, and modern web development, integrating AI into intuitive, full-stack applications.
            </p>
          </div>
          
          <div className="skills-container">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About