import React, { useState } from 'react'
import OverviewTab from './tabs/OverviewTab'
import SectoresTab from './tabs/SectoresTab'
import ComerciostTab from './tabs/ComerciostTab'
import AnalisisTab from './tabs/AnalisisTab'
import '../styles/TabsSection.css'

function TabsSection({ data }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Resumen General
        </button>
        <button 
          className={`tab-btn ${activeTab === 'sectores' ? 'active' : ''}`}
          onClick={() => setActiveTab('sectores')}
        >
          🏢 Por Sectores
        </button>
        <button 
          className={`tab-btn ${activeTab === 'comercios' ? 'active' : ''}`}
          onClick={() => setActiveTab('comercios')}
        >
          📋 Top Comercios
        </button>
        <button 
          className={`tab-btn ${activeTab === 'analisis' ? 'active' : ''}`}
          onClick={() => setActiveTab('analisis')}
        >
          📈 Análisis Comparativo
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'overview' && <OverviewTab data={data} />}
        {activeTab === 'sectores' && <SectoresTab data={data} />}
        {activeTab === 'comercios' && <ComerciostTab data={data} />}
        {activeTab === 'analisis' && <AnalisisTab data={data} />}
      </div>
    </div>
  )
}

export default TabsSection
