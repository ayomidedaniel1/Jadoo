import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import hero from '../../assets/Hero.png';

import './hero.css';

const Hero = () => {
  return (
    <div className='jadoo__hero section__padding' id='hero'>
      <div className="jadoo__hero-content">
        <h2>Best Destinations around the world</h2>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className='jadoo__hero-cta'>
          <button className='jadoo__hero-cta_more'>Find out more</button>
          <button className='jadoo__hero-cta_play'><BsFillPlayCircleFill style={{
            width: '2.8125rem', height: '1.75rem', color: '#DF6951'
          }} />Play Demo</button>
        </div>
      </div>

      <div className="jadoo__hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
