import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = e => {
    e.preventDefault();

    if (email === 'example@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      setErrorMessage(
        'email: example@example.com ve password: password olarak giriniz'
      );
    }
  };

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
          <h2 className="signin-title flex justify-center text-black text-[22px] font-semibold uppercase pb-[9px]">
            Sign In
          </h2>
          <p className="account-text flex justify-center text-neutral-500 text-[14px] font-normal pb-[50px]">
            Enter your credentials to access your account
          </p>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="text-neutral-500 text-[14px] font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="border placeholder:text-stone-300 placeholder:font-normal placeholder:text-xs relative bg-white p-2 border-neutral-200"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-neutral-500 text-[14px] font-medium"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              minLength={8}
              required
              placeholder="Enter your password"
              className="border placeholder:text-stone-300 placeholder:font-normal placeholder:text-xs relative bg-white p-2 border-neutral-200"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="flex justify-center text-red-500 text-[14px] font-medium mt-2">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            onClick={handleSignIn}
            className="signin-button w-[415px] h-11 relative flex justify-center items-center mt-[30px] bg-yellow-500 rounded text-white uppercase mb-[27px]"
          >
            Sign In
          </button>
          <div className="flex justify-center">
            <label className="text-neutral-500 text-[14px] font-normal">
              Forgot your password?{' '}
              <a
                href="https://example.com/reset-password"
                className="text-yellow-500 text-[14px] font-medium underline"
              >
                Reset Password
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
