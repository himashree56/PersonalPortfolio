import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Project'
import Contact from './components/sections/Contact'
import CertificationsandHobbies from './components/sections/HobbiesAndCertifications'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />}/>
          <Route path="/HobbiesAndCertification" element={<CertificationsandHobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}



export default App