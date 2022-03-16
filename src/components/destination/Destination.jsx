import React from 'react';

import { SiMinutemailer } from 'react-icons/si';
import './destination.css';

const Destination = ({ img, location, price, trip }) => {
  return (
    <div className='jadoo__destinations-container__destination'>
      <img src={img} alt='img' />
      <div className="jadoo__destinations-container__destination-content">
        <h4 className='jadoo__destinations-container__destination-content_location'>{location}</h4>
        <h4 className='jadoo__destinations-container__destination-content_price'>{price}</h4>
        <h4 className='jadoo__destinations-container__destination-content_trip'><SiMinutemailer />{trip}</h4>
      </div>
    </div>
  );
};

export default Destination;
