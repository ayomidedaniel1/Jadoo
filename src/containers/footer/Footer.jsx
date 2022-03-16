import React from 'react';

import Outbound from '../../assets/Outbound.png';

import './footer.css';

const Footer = () => {
  return (
    <div className='jadoo__footer section__padding'>
      <div className="jadoo__footer-container">

        <div className="jadoo__footer-container_box">

          <div className="jadoo__footer-container_box-jadoo">
            <h2>Jadoo.</h2>
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>

          <div className="jadoo__footer-container_box-misc">
            <h3>Company</h3>
            <a href="/">About</a>
            <a href="/">Career</a>
            <a href="/">Mobile</a>
          </div>

          <div className="jadoo__footer-container_box-misc">
            <h3>Contact</h3>
            <a href="/">Help/FAQ</a>
            <a href="/">Press</a>
            <a href="/">Affiliates</a>
          </div>

          <div className="jadoo__footer-container_box-misc">
            <h3>More</h3>
            <a href="/">Airline Fees</a>
            <a href="/">Airline</a>
            <a href="/">Low fare tips</a>
          </div>

          <div className="jadoo__footer-container_box-social">
            <img src={Outbound} alt="img" />
          </div>

        </div>
      </div>

      <div className="jadoo__footer-credit">
        <span>All rights reserved &copy;jadoo.co</span>
      </div>
    </div>
  );
};

export default Footer;
