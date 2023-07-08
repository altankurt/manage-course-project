import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const dashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col rounded-lg">
        <Header />
        <div className="flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default dashboardLayout;
