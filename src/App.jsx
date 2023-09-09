import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import DashboardLayout from './components/Layouts/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
