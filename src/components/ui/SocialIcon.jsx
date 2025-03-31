import React from 'react'

const SocialIcon = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-icon" 
      aria-label={label}
    >
      <img src={icon} alt={label} />
    </a>
  )
}

export default SocialIcon