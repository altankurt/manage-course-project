import React from 'react';

const Logo = () => {
  return (
    <div className="logo flex mt-[18px] mb-[54px] justify-center items-center relative">
      <svg
        width="6"
        height="39"
        viewBox="0 0 6 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6" />
      </svg>
      <h1 className="manage-courses px-3 text-xl items-center font-bold text-black uppercase">
        Manage Courses
      </h1>
    </div>
  );
};

export default Logo;
