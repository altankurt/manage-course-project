import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <div className="w-[270px] h-screen bg-stone-200">
      <Logo />
      <Profile />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
