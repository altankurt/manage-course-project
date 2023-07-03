import React from 'react';

export default function Login() {
  return (
    <div className="relative w-full h-screen bg-gradient font-fontFamily">
      <div className="login-form flex justify-center items-center h-full">
        <form className="card w-[475px] h-[550px] mx-auto rounded-2xl shadow bg-white p-8">
          <div className="logo flex mb-[43px] justify-center items-center relative">
            <svg
              width="6"
              height="39"
              viewBox="0 0 6 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6" />
            </svg>
            <h1 className="manage-courses px-3 text-[32px] items-center font-bold text-black uppercase">
              Manage Courses
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
