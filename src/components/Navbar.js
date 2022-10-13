import React from 'react';
import logo from '../img/nahid.png';
import Baner from './Baner';

function Navbar() {
  return (
    <header>
      <nav>
            <div className='logo'>
                <a href="/">
                    <img src={logo} alt="" />
                    <h1>Nahid Hasan</h1>
                </a>
            </div>
        </nav>
        <Baner />
    </header>
  )
}

export default Navbar;