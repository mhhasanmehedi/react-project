import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link to='/'>
          <h1>
            Mehedi <span>.</span>
          </h1>
        </Link>
      </div>
      <div className='mainmenu'>
        <Link to='/markdown'>Markdown</Link>
        <Link to='/pomodoro'>Pomodoro</Link>
        <Link to='/typeracer'>Type_Racer</Link>
      </div>
    </nav>
  );
};

export default Navbar;
