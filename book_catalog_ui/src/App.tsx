import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
