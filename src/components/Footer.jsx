import React from 'react'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Dashboard de Estadísticas de Comercios. Todos los derechos reservados.</p>
        <p className="footer-subtitle">Datos actualizados en tiempo real • Análisis profesional • Reportes interactivos</p>
      </div>
    </footer>
  )
}

export default Footer
