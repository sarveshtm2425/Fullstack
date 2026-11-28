import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/projects'
import Tasks from './pages/tasks'
import Dashboard from './pages/dashboard'
import Register from './pages/register'
import Login from './pages/login'
import Admin from './pages/Admin/Adminlayout'
import AdminDashboard from './pages/Admin/dashboard'
import Details from './pages/Admin/details'
import Settings from './pages/Admin/settings'

function App() {
  
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="details" element={<Details/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
