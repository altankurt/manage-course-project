import React from 'react';
import { LogoIcon } from '../../assets/icons/icons';

const Logo = () => {
  return (
    <div className="flex mt-4 mb-12 justify-center items-center">
      <LogoIcon />
      <h1 className="px-3 text-lg md:text-xl font-bold uppercase">
        Manage Courses
      </h1>
    </div>
  );
};

export default Logo;
