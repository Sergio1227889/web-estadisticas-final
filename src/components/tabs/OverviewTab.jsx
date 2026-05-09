import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, RadarController, RadialLinearScale, RadialLinearScale, Tooltip, Legend } from 'chart.js'
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2'
import '../../styles/Charts.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, RadarController, RadialLinearScale, RadialLinearScale, Tooltip, Legend)

function OverviewTab({ data }) {
  const labels = data.map(s => s.nombre.split(' ')[0])
  const colors = data.map(s => s.color)

  const ventasChartData = {
    labels,
    datasets: [{
      label: 'Ventas (Millones €)',
      data: data.map(s => (s.ventas / 1000000).toFixed(1)),
      backgroundColor: colors,
      borderRadius: 8,
    }]
  }

  const distribucionChartData = {
    labels: data.map(s => s.nombre),
    datasets: [{
      data: data.map(s => s.ventas),
      backgroundColor: colors,
      borderColor: '#fff',
      borderWidth: 2
    }]
  }

  const crecimientoChartData = {
    labels,
    datasets: [{
      label: 'Crecimiento (%)',
      data: data.map(s => s.crecimiento),
      borderColor: '#004E89',
      backgroundColor: 'rgba(0, 78, 137, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointBackgroundColor: '#004E89',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    }]
  }

  const margenChartData = {
    labels,
    datasets: [{
      label: 'Margen de Beneficio (%)',
      data: data.map(s => s.margen),
      borderColor: '#F7B801',
      backgroundColor: 'rgba(247, 184, 1, 0.2)',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#F7B801'
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

  return (
    <div className="overview-tab">
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">📊 Ventas por Sector</div>
          <Bar data={ventasChartData} options={chartOptions} />
        </div>
        <div className="chart-card">
          <div className="chart-title">🥧 Distribución de Ventas</div>
          <Doughnut data={distribucionChartData} options={chartOptions} />
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">📈 Crecimiento por Sector</div>
          <Line data={crecimientoChartData} options={chartOptions} />
        </div>
        <div className="chart-card">
          <div className="chart-title">🎯 Margen de Beneficio</div>
          <Radar data={margenChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default OverviewTab
