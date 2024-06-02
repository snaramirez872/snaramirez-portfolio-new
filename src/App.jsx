import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <>
    <Router>
      <div className="App">
        <NavBar />
        <div className="pages">
          Hello
        </div>
      </div>
    </Router>
    </>
  )
}
