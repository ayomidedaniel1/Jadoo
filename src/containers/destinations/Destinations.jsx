import React from 'react';

import { Destination } from '../../components';

import Decor from '../../assets/Decor.png';


import img1 from '../../assets/Destination1.png';
import img2 from '../../assets/Destination2.jpg';
import img3 from '../../assets/Destination3.png';

import './destinations.css';

const destinationsData = [
  {
    img: img1,
    location: 'Rome, Italty',
    price: '$5,42k',
    trip: '10 Days Trip'
  },
  {
    img: img2,
    location: 'London, UK',
    price: '$4.2k',
    trip: '12 Days Trip'
  },
  {
    img: img3,
    location: 'Full Europe',
    price: '$15k',
    trip: '28 Days Trip'
  }
];

const Destinations = () => {
  const img = Decor;

  return (
    <div className='jadoo__destinations section__padding' id='destinations'>
      <div className="jadoo_destinations-heading">
        <h2>Top Selling</h2>
        <h1>Top Destinations</h1>
      </div>
      <div className="jadoo__destinations-container">
        {destinationsData.map((item, index) => (
          <Destination img={item.img} location={item.location} price={item.price} trip={item.trip} key={item.location + index} />
        ))}
        <img className='jadoo_destinations-img' src={img} alt="img" />
      </div>
    </div>
  );
};

export default Destinations;
