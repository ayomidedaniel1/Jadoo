import React from 'react';

import Carousel, { CarouselItem } from './carousel/Carousel';

import dp1 from '../../assets/Image.png';
import dp2 from '../../assets/Image.png';
import dp3 from '../../assets/Image.png';

import './testimonial.css';

const testimonialData = [
  {
    img: dp1,
    name: 'Mike taylor',
    Location: 'Lahore, Pakistan',
    testimony: "All I can say is 'Choose JADOO'. You won't regred it."
  },
  {
    img: dp2,
    name: 'Daniel Elordi',
    Location: 'Lagos, Nigeria',
    testimony: 'Jadoo really made travelling much more fun.'
  },
  {
    img: dp3,
    name: 'Sharon Pierce',
    Location: 'London, United Kingdom',
    testimony: 'I really am lucky to have come across JADOO.'
  }
];

const Testimonial = () => {
  return (
    <div className='jadoo__testimonial section__padding'>
      <div className="jadoo__testimonial-content">
        <h2>Testimonials</h2>
        <h1>What People Say About Us</h1>
      </div>
      <div className="jadoo__testimonial-people">
        <Carousel>
          {testimonialData.map((item, index) => (
            <CarouselItem img={item.img} location={item.Location} name={item.name} testimony={item.testimony} key={item.name + index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;