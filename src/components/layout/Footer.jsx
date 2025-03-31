import React from 'react'
import SocialIcon from '../ui/SocialIcon'
import '../styles/components.css'
import '../styles/global.css'
import '../styles/variables.css'
import '../styles/neobrutalism.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-links">
                    <SocialIcon
                        href="https://github.com/himashree56"
                        icon="/images/icons8-github.svg"
                        label="GitHub" />
                    <SocialIcon
                        href="https://www.linkedin.com/in/hima-a0881134a/"
                        icon="/images/icons8-linkedin.svg"
                        label="LinkedIn" />
                    <SocialIcon
                        href="https://himashree966@gmail.com/"
                        icon="/images/icons8-gmail.svg"
                        label="Gmail" />
                </div>
                <p className="copyright">© {new Date().getFullYear()} Himasree Panku. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
