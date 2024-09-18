import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (

    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas"/>}/> 
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
