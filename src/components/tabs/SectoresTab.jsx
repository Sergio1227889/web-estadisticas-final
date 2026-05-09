import React from 'react'
import '../../styles/SectoresTab.css'

function SectoresTab({ data }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="sector-grid">
      {data.map(sector => (
        <div key={sector.id} className="sector-card" style={{ borderTopColor: sector.color }}>
          <div className="sector-icon">{sector.icon}</div>
          <div className="sector-name">{sector.nombre}</div>
          <div className="sector-stat">
            <span className="stat-label">Ventas:</span>
            <span className="stat-value">{formatCurrency(sector.ventas)}</span>
          </div>
          <div className="sector-stat">
            <span className="stat-label">Clientes:</span>
            <span className="stat-value">{(sector.clientes / 1000).toFixed(1)}K</span>
          </div>
          <div className="sector-stat">
            <span className="stat-label">Crecimiento:</span>
            <span className="stat-value positive">{sector.crecimiento.toFixed(1)}%</span>
          </div>
          <div className="sector-stat">
            <span className="stat-label">Margen:</span>
            <span className="stat-value">{sector.margen}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectoresTab
