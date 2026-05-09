import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">📊</span>
          Dashboard Comercios
        </div>
        <ul className="navbar-menu">
          <li><a onClick={() => scrollToSection('overview')}>Resumen</a></li>
          <li><a onClick={() => scrollToSection('sectores')}>Sectores</a></li>
          <li><a onClick={() => scrollToSection('comercios')}>Comercios</a></li>
          <li><a onClick={() => scrollToSection('analisis')}>Análisis</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
