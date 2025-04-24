import React from 'react'
import './App.css'
import Home from './components/home.jsx'
import Sidebar from './components/sidebar.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div className="App flex">
      <Sidebar />
      <div>
        <Navbar />
        <Home />
      </div>
    
    </div>
  )
}

export default App
