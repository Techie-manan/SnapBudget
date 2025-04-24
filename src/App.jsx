import React from 'react'
import './App.css'
import Home from './components/total.jsx'
import Sidebar from './components/sidebar.jsx'
import Navbar from './components/navbar.jsx'
import Expense from './components/expense.jsx'
import Analysis from './components/analysis.jsx'

const App = () => {
  return (
    <div className="App flex">
      <Sidebar />
      <div>
        <Navbar />
        <Expense />
        <Home />
        <Analysis />
      </div>

    </div>
  )
}

export default App
