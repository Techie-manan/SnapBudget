import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Total from './components/total.jsx'
import Sidebar from './components/sidebar.jsx'
import Navbar from './components/navbar.jsx'
import Expense from './components/expense.jsx'
import Analysis from './components/analysis.jsx'
import Savings from './components/savings.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Invest from './components/invest.jsx'
import Addsnap from './components/landingpage.jsx';
import Addform from './components/addform.jsx';
import Login from './components/login.jsx';


function App() {
  const refDExp = useRef(null);
  const refTotal = useRef(null);
  const refAnalysis = useRef(null);
  const refSavings = useRef(null);

  return (
    <Router>
     
      <div className="App relative flex">
        <Sidebar
          scrollToDExp={() => refDExp.current?.scrollIntoView({ behavior: 'smooth' })}
          scrollToTotal={() => refTotal.current?.scrollIntoView({ behavior: 'smooth' })}
          scrollToAnalysis={() => refAnalysis.current?.scrollIntoView({ behavior: 'smooth' })}
          scrollToSavings={() => refSavings.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <div className="flex-1 w-[85vw] ">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Addsnap />
                  <Expense ref={refDExp} />
                  <Total ref={refTotal} />
                  <Analysis ref={refAnalysis} />
                  <Savings ref={refSavings} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/addexpenseform" element={<Addform />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
