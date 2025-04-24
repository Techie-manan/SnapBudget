import React from 'react'
import './App.css'
import Home from './components/total.jsx'
import Sidebar from './components/sidebar.jsx'
import Navbar from './components/navbar.jsx'
import Expense from './components/expense.jsx'

const App = () => {
  return (
    <div className="App flex">
      <Sidebar />
      <div>
        <Navbar />
        <Expense />
        <Home />
      </div>
    
    </div>
  )
}

export default App
