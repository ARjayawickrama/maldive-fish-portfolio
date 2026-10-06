import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Architecture from './pages/Architecture'
import AIInspection from './pages/AIInspection'
import IoTMonitoring from './pages/IoTMonitoring'
import ProcessOptimization from './pages/ProcessOptimization'
import Results from './pages/Results'
import Team from './pages/Team'
import References from './pages/References'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function AppLayout() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('smartmaldive-theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.classList.toggle('theme-light', theme === 'light')
    document.body.classList.toggle('theme-dark', theme === 'dark')
    window.localStorage.setItem('smartmaldive-theme', theme)
  }, [theme])

  return (
    <div className={theme === 'light' ? 'theme-light min-h-screen bg-slate-50 text-slate-900' : 'theme-dark min-h-screen bg-slate-950 text-slate-100'}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/ai-inspection" element={<AIInspection />} />
          <Route path="/iot-monitoring" element={<IoTMonitoring />} />
          <Route path="/process-optimization" element={<ProcessOptimization />} />
          <Route path="/results" element={<Results />} />
          <Route path="/team" element={<Team />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
