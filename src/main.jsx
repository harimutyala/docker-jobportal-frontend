import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import DashBoard from './DashBoard'

// Add basename to match your WAR context
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/frontapp1">
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>
  </BrowserRouter>,
)
