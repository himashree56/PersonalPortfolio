import React, { useState } from 'react';
import Button from '../ui/Button';
import '../styles/components.css';
import '../styles/global.css';
import '../styles/variables.css';
import '../styles/neobrutalism.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill out all fields before submitting.',
        loading: false,
      });
      return;
    }
    setFormStatus({ submitted: false, error: false, message: '', loading: true });

    setTimeout(() => {
      alert('Your Message Has Been Sent!');
      setFormData({ name: '', email: '', message: '' });
      setFormStatus({ submitted: true, error: false, message: 'Thank You for Visiting!', loading: false });
    }, 1000);
  };

  return (
    <section className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>himashree966@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Bengaluru, Karnataka, India</p>
            </div>
            <div className="info-item">
              <h3>Social Media</h3>
              <div className="social-links-small">
                <a href="https://github.com/himashree56" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src="/images/icons8-github.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/hima-a0881134a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src="/images/icons8-linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form neo-form" onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="submit-button" disabled={formStatus.loading}>
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
