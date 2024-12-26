import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Desktop/Sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pt-[72px] md:pt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;