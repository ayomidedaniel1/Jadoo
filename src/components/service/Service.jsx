import React from 'react';

import './service.css';

const Service = ({ img, title, text }) => {
  return (
    <div className='jadoo__service-container__service'>
      <div className="jadoo__service-container__service-img">
        <img src={img} alt='img' />
      </div>
      <div className="jadoo__service-container__service-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="jadoo_service-container__service-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Service;
