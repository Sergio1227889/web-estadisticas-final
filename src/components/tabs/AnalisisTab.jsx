import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Bar, Bubble } from 'react-chartjs-2'
import '../../styles/Charts.css'

ChartJS.register(...registerables)

function AnalisisTab({ data }) {
  const labels = data.map(s => s.nombre.split(' ')[0])
  const colors = data.map(s => s.color)

  // Datos para gráfico de burbujas
  const bubbleData = []
  data.forEach(sector => {
    sector.comercios.forEach(comercio => {
      bubbleData.push({
        x: comercio.crecimiento,
        y: comercio.margen,
        r: 8
      })
    })
  })

  const scatterChartData = {
    datasets: [{
      label: 'Comercios',
      data: bubbleData,
      backgroundColor: 'rgba(255, 107, 53, 0.6)',
      borderColor: '#FF6B35',
      borderWidth: 2
    }]
  }

  const clientesChartData = {
    labels,
    datasets: [{
      label: 'Clientes Activos',
      data: data.map(s => s.clientes),
      backgroundColor: colors,
      borderRadius: 8,
    }]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  }

  const scatterOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Crecimiento (%)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Margen (%)'
        }
      }
    }
  }

  return (
    <div className="analisis-tab">
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">🔵 Relación: Margen vs Crecimiento</div>
          <Bubble data={scatterChartData} options={scatterOptions} />
        </div>
        <div className="chart-card">
          <div className="chart-title">👥 Clientes Activos por Sector</div>
          <Bar data={clientesChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default AnalisisTab
