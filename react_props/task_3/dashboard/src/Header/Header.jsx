import React from 'react';
import './Header.css';
import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header>
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
    </header>
  );
}

export default Header;