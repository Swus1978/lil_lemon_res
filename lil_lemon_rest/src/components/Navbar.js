import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <>
        <img className="logo" src="/Logo .svg" alt="Logo" />
      </>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order On Line</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
        <Outlet />
    </>
  );
};

export default Navbar;
