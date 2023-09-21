import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email === 'mail@mail.com' && password === '12345') {
      navigate('/dashboard');
    } else {
      setErrorMessage('email: mail@mail.com ve password: 12345 olarak giriniz');
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient font-fontFamily">
      <div className="login-form flex justify-center items-center h-full">
        <form className="card w-full md:w-3/5 lg:w-1/3 mx-auto rounded-2xl shadow bg-white p-8">
          <div className="logo flex mb-12 justify-center items-center">
            <svg
              width="6"
              height="39"
              viewBox="0 0 6 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6" />
            </svg>
            <h1 className="manage-courses px-3 text-2xl md:text-3xl font-bold text-black uppercase">
              Manage Courses
            </h1>
          </div>
          <h2 className="signin-title text-center text-black text-xl md:text-2xl font-semibold uppercase pb-9">
            Sign In
          </h2>
          <p className="account-text text-center text-neutral-500 text-sm md:text-base font-normal pb-12">
            Enter your credentials to access your account
          </p>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="text-neutral-500 text-sm md:text-base font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="border placeholder:text-stone-300 placeholder:font-normal placeholder:text-xs mt-2 p-2 border-neutral-200 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="password"
              className="text-neutral-500 text-sm md:text-base font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              minLength={8}
              required
              placeholder="Enter your password"
              className="border placeholder:text-stone-300 placeholder:font-normal placeholder:text-xs mt-2 p-2 border-neutral-200 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-center text-red-500 text-sm md:text-base font-medium mt-2">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            onClick={handleSignIn}
            className="signin-button w-full h-11 flex justify-center items-center mt-6 bg-yellow-500 rounded text-white uppercase"
          >
            Sign In
          </button>
          <div className="flex justify-center mt-6">
            <label className="text-neutral-500 text-sm md:text-base font-normal">
              Forgot your password?{' '}
              <a
                href="https://example.com/reset-password"
                className="text-yellow-500 underline"
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
