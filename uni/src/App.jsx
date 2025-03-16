import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import People from './components/People';
import Opportunities from './components/Opportunities';
import Resources from './components/Resources';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/people" element={<People />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/resources" element={<Resources />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
