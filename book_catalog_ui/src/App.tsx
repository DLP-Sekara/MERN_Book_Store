import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
