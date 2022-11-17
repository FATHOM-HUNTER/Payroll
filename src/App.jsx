import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DonorDashboard from './Pages/Dashboard/DonorDashboard';
import NgoDashboard from './Pages/Dashboard/NgoDashboard';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <div>
        <Toaster />
        <Routes>
          <Route path="/dashboard/employee" element={<NgoDashboard />} />
          <Route path="/dashboard/hr" element={<DonorDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
