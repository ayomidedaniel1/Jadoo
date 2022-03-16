import React from 'react';

import { Navbar, Logos, Subscription } from './components';
import { Destinations, Footer, Hero, Services, Testimonials } from './containers';

import './App.css';

const App = () => {
  return (
    <div>
      <div className="background__bg">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Destinations />
      <Testimonials />
      <Logos />
      <Subscription />
      <Footer />
    </div>
  );
};

export default App;
