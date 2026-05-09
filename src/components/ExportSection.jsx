import React from 'react'
import '../styles/ExportSection.css'

function ExportSection({ data }) {
  const exportToCSV = () => {
    let csv = 'Comercio,Sector,Ventas,Transacciones,Ticket Promedio,Crecimiento,Margen\n'
    
    data.forEach(sector => {
      sector.comercios.forEach(comercio => {
        csv += `"${comercio.nombre}","${sector.nombre}",${comercio.ventas},${comercio.transacciones},${comercio.ticket.toFixed(2)},${comercio.crecimiento.toFixed(2)}%,${comercio.margen}%\n`
      })
    })

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'estadisticas-comercios.csv'
    a.click()
  }

  const printPage = () => {
    window.print()
  }

  const shareData = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Estadísticas de Comercios',
        text: 'Dashboard de análisis de comercios por sectores',
        url: window.location.href
      })
    } else {
      alert('Comparte esta página usando tu navegador o copia el enlace')
    }
  }

  return (
    <div className="export-section">
      <h3>📥 Exportar Datos</h3>
      <div className="btn-group">
        <button className="btn" onClick={exportToCSV}>
          📊 Descargar CSV
        </button>
        <button className="btn btn-secondary" onClick={printPage}>
          🖨️ Imprimir
        </button>
        <button className="btn btn-secondary" onClick={shareData}>
          📤 Compartir
        </button>
      </div>
    </div>
  )
}

export default ExportSection
