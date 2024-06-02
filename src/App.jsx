import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/AboutMe/AboutMe';
import './App.css'

export default function App() {
  return (
    <>
    <Router>
      <div className="App">
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}
