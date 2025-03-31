import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/components.css'
import '../styles/global.css'
import '../styles/variables.css'
import '../styles/neobrutalism.css'

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout