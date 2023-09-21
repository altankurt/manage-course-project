import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Course,
  Student,
  Payment,
  Report,
  Settings,
  Logout,
} from '../../assets/icons/icons';

const NavLinks = () => {
  const links = [
    { to: '/dashboard', icon: <Home />, label: 'Home' },
    { to: '/dashboard/course', icon: <Course />, label: 'Course' },
    { to: '/dashboard/students', icon: <Student />, label: 'Students' },
    { to: '/dashboard/payment', icon: <Payment />, label: 'Payment' },
    { to: '/dashboard/report', icon: <Report />, label: 'Report' },
    { to: '/dashboard/settings', icon: <Settings />, label: 'Settings' },
    { to: '/#', icon: <Logout />, label: 'Logout', extraClass: 'mt-[148px]' },
  ];

  return (
    <nav className="Navlinks flex flex-col items-center w-full mt-20">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to} className={`navBtn ${link.extraClass || ''}`}>
              {link.icon}
              <p className="pl-4 text-base">{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
