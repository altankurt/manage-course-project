import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 flex flex-col items-center justify-between w-64 md:w-72 h-screen bg-SidebarBg p-4 overflow-y-auto z-10 overflow-x-hidden">
      <Logo />
      <Profile />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
