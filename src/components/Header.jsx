import React from 'react';
import { LeftArrow, Users } from '../assets/icons/icons';

const Header = () => {
  return (
    <header className=" flex items-center justify-between h-16 mx-12">
      <div>
        <LeftArrow />
      </div>
      <div>
        <Users />
      </div>
    </header>
  );
};

export default Header;
