import React, { useState, useEffect } from 'react'
import KPICards from '../components/KPICards'
import TabsSection from '../components/TabsSection'
import ExportSection from '../components/ExportSection'
import comerciosData from '../data/comercios.json'
import '../styles/Dashboard.css'

function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(comerciosData.sectores)
  }, [])

  return (
    <div className="dashboard">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>📊 Estadísticas de Comercios</h1>
          <p>Análisis integral por sectores y rendimiento comparativo en tiempo real</p>
        </div>

        {/* KPI Cards */}
        <KPICards data={data} />

        {/* Tabs Section */}
        <TabsSection data={data} />

        {/* Export Section */}
        <ExportSection data={data} />
      </div>
    </div>
  )
}

export default Dashboard
