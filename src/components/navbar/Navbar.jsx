import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/Logo.png';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='jadoo__navbar'>
      <div className="jadoo__navbar-links">
        <div className="jadoo__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
      </div>
      <div className="jadoo__navbar-links_container">
        <p><a href="#destinations">Destinations</a></p>
        <p><a href="#hotels">Hotels</a></p>
        <p><a href="#flights">Flights</a></p>
        <p><a href="#bookings">Bookings</a></p>
        <p><a href="#login">Login</a></p>
        <button type="button">Sign up</button>
      </div>
      <div className="jadoo__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#212832" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#212832" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="jadoo__navbar-menu_container scale-up-center">
            <div className="jadoo__navbar-menu_container-links">
              <p><a href="#destinations">Destinations</a></p>
              <p><a href="#hotels">Hotels</a></p>
              <p><a href="#flights">Flights</a></p>
              <p><a href="#bookings">Bookings</a></p>
              <p>Login</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
