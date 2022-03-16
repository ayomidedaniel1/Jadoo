import React from 'react';

import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import Logo3 from '../../assets/Logo3.png';
import Logo4 from '../../assets/Logo4.png';
import Logo5 from '../../assets/Logo5.png';

import './logos.css';

const Logos = () => {
  return (
    <div className='jadoo__logos section__padding'>
      <div><img src={Logo1} alt="Logo" /></div>
      <div><img src={Logo2} alt="Logo" /></div>
      <div><img src={Logo3} alt="Logo" /></div>
      <div><img src={Logo4} alt="Logo" /></div>
      <div><img src={Logo5} alt="Logo" /></div>
    </div>
  );
};

export default Logos;
