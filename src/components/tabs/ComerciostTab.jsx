import React from 'react'
import '../../styles/ComerciostTab.css'

function ComerciostTab({ data }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  let rank = 1
  const allComercios = []

  data.forEach(sector => {
    sector.comercios.forEach(comercio => {
      allComercios.push({
        ...comercio,
        sector: sector.nombre,
        sectorColor: sector.color
      })
    })
  })

  allComercios.sort((a, b) => b.ventas - a.ventas)

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Comercio</th>
            <th>Sector</th>
            <th>Ventas</th>
            <th>Transacciones</th>
            <th>Ticket Promedio</th>
            <th>Crecimiento</th>
            <th>Margen</th>
          </tr>
        </thead>
        <tbody>
          {allComercios.map(comercio => (
            <tr key={comercio.id}>
              <td><span className="rank">{rank++}</span></td>
              <td><strong>{comercio.nombre}</strong></td>
              <td>
                <span className="sector-badge" style={{ background: `${comercio.sectorColor}20`, color: comercio.sectorColor }}>
                  {comercio.sector.split(' ')[0]}
                </span>
              </td>
              <td>{formatCurrency(comercio.ventas)}</td>
              <td>{comercio.transacciones.toLocaleString()}</td>
              <td>{formatCurrency(comercio.ticket)}</td>
              <td><span className="positive">+{comercio.crecimiento.toFixed(1)}%</span></td>
              <td>{comercio.margen}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComerciostTab
