import { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartCard from '../components/ChartCard'
import SensorCard from '../components/SensorCard'
import { sensorTrendData } from '../data/dashboardData'

export default function IoTMonitoring() {
  const [sensors, setSensors] = useState({
    temperature: 31.4,
    humidity: 68,
    airflow: 1.2,
    voc: 72,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setSensors((prev) => ({
        temperature: Number((prev.temperature + (Math.random() - 0.5) * 0.8).toFixed(1)),
        humidity: Number((prev.humidity + (Math.random() - 0.5) * 4).toFixed(0)),
        airflow: Number((prev.airflow + (Math.random() - 0.5) * 0.25).toFixed(1)),
        voc: Number((prev.voc + (Math.random() - 0.5) * 6).toFixed(0)),
      }))
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  const alertActive = sensors.humidity > 75 && sensors.airflow < 0.5
  const chartData = sensorTrendData.map((entry) => ({
    ...entry,
    temp: Number((entry.temp + (Math.random() - 0.5) * 2.5).toFixed(1)),
    humidity: Number((entry.humidity + (Math.random() - 0.5) * 6).toFixed(0)),
    airflow: Number((entry.airflow + (Math.random() - 0.5) * 0.35).toFixed(1)),
    voc: Number((entry.voc + (Math.random() - 0.5) * 8).toFixed(0)),
  }))

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">IoT monitoring</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Real-Time Drying Environment Monitoring</h1>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <SensorCard title="Temperature" value={sensors.temperature.toFixed(1)} unit="°C" status={sensors.temperature > 35 ? 'alert' : 'stable'} tone={sensors.temperature > 35 ? 'danger' : 'normal'} />
          <SensorCard title="Humidity" value={sensors.humidity.toFixed(0)} unit="%" status={sensors.humidity > 75 ? 'alert' : 'stable'} tone={sensors.humidity > 75 ? 'danger' : 'normal'} />
          <SensorCard title="Airflow" value={sensors.airflow.toFixed(1)} unit="m/s" status={sensors.airflow < 0.5 ? 'alert' : 'stable'} tone={sensors.airflow < 0.5 ? 'danger' : 'normal'} />
          <SensorCard title="MQ-135" value={sensors.voc.toFixed(0)} unit="ADC" status={sensors.voc > 90 ? 'alert' : 'stable'} tone={sensors.voc > 90 ? 'danger' : 'normal'} />
        </div>

        {alertActive && (
          <div className="mb-8 rounded-3xl border border-red-500/30 bg-red-500/10 p-5 text-red-100">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-200">Drying environment alert</p>
            <h3 className="text-2xl font-semibold">{'RH > 75% and Airflow < 0.5 m/s for more than 15 minutes'}</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-red-100">
              <span className="rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1">Auxiliary fan recommended</span>
              <span className="rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1">Protective solar cover recommended</span>
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Temperature over time">
            <div className="h-64">
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Area type="monotone" dataKey="temp" stroke="#22d3ee" fill="url(#tempFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Humidity over time">
            <div className="h-64">
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="humidityFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#34d399" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Area type="monotone" dataKey="humidity" stroke="#34d399" fill="url(#humidityFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Airflow trend">
            <div className="h-64">
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Area type="monotone" dataKey="airflow" stroke="#a78bfa" fill="#a78bfa" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="VOC trend">
            <div className="h-64">
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Area type="monotone" dataKey="voc" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.22} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  )
}
