import React from 'react';

import { Service } from '../../components';

import img1 from '../../assets/Group1.png';
import img2 from '../../assets/Group2.png';
import img3 from '../../assets/Group3.png';
import img4 from '../../assets/Group4.png';
import img5 from '../../assets/Group5.png';

import './services.css';

const servicesData = [
  {
    img: img2,
    title: 'Calculated Weather',
    text: 'Built Wicket longer admire do barton vanity itself do in it.'
  },
  {
    img: img3,
    title: 'Best Flights',
    text: 'Engrossed listening. Park gate sell they west hard for the.'
  },
  {
    img: img4,
    title: 'Local Events',
    text: 'Barton vanity itself do in it. Preferd to men it engrossed listening. '
  },
  {
    img: img5,
    title: 'Customization',
    text: 'We deliver outsourced aviation services for military customers'
  }
];

const Services = () => {
  const img = img1;

  return (
    <div className='jadoo__services section__padding'>
      <div className='jadoo__services-heading'>
        <h2>CATEGORY</h2>
        <h1>We Offer Best Services</h1>
        <img className='jadoo__services-img' src={img} alt="img" />
      </div>
      <div className="jadoo__services-container">
        {servicesData.map((item, index) => (
          <Service img={item.img} title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
