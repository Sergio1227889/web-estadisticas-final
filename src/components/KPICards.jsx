import React from 'react'
import '../styles/KPICards.css'

function KPICards({ data }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const totalVentas = data.reduce((sum, sector) => sum + sector.ventas, 0)
  const totalClientes = data.reduce((sum, sector) => sum + sector.clientes, 0)
  const avgCrecimiento = (data.reduce((sum, sector) => sum + sector.crecimiento, 0) / data.length).toFixed(1)

  return (
    <div className="kpi-grid">
      <div className="kpi-card">
        <div className="kpi-label">💰 Ventas Totales</div>
        <div className="kpi-value">{formatCurrency(totalVentas)}</div>
        <div className="kpi-change">↑ 18.5% vs período anterior</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">👥 Clientes Activos</div>
        <div className="kpi-value">{(totalClientes / 1000).toFixed(1)}K</div>
        <div className="kpi-change">↑ 12.3% vs período anterior</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">📈 Crecimiento Promedio</div>
        <div className="kpi-value">{avgCrecimiento}%</div>
        <div className="kpi-change">Sector más dinámico</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">🏪 Sectores Activos</div>
        <div className="kpi-value">{data.length}</div>
        <div className="kpi-change">{data.reduce((sum, s) => sum + s.comercios.length, 0)} comercios monitoreados</div>
      </div>
    </div>
  )
}

export default KPICards
