import React from 'react';
import '../styles/components.css';
import '../styles/global.css';
import '../styles/variables.css';
import '../styles/neobrutalism.css';

const CertificationsandHobbies = () => {
  const hobbies = ["Listening to songs", "Dancing", "Watching Movies","Researching","Drawing"];
  const certifications = [
    "Intrduction to Machine Learning - Infosys SpringBoard",
    "Course on Semantic Analysis - Great Learning",
    "A Comprehensive Course on Data Science with python - Finlatics",
  ];

  return (
    <section className="about-section">
      <div className="section-container">
        <h2 className="section-title">Certifications & Hobbies</h2>

        <div className="about-content">
          <div className="certifications-container">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="hobbies-container">
            <h3>Hobbies</h3>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-tag">
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsandHobbies;
