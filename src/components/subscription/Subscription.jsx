import React from 'react';

import { FiMail } from 'react-icons/fi';

import './subscription.css';

const icon = () => {
  return (
    <span><FiMail /></span>
  );
};

const Subscription = () => {
  const value = "Your email...";

  return (
    <div className='jadoo__subscription section__padding section__margin'>
      <div className='jadoo__subscription-content'>
        <div className="jadoo__subscription-heading">
          <h1>Subscribe to get information, latest news and other interesting offers from Jadoo</h1>
        </div>
        <div className='jadoo__subscription-input'>
          <input type="text" value={value} />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
