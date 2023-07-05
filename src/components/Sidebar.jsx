import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import NavLinks from './NavLinks';
import Rectangle from './Rectangle';

const Sidebar = () => {
  return (
    <div className="w-[270px] h-[900px]">
      <Logo />
      <Profile />
      <NavLinks />
      <Rectangle />
    </div>
  );
};

export default Sidebar;
