import React from 'react';
import Navbar from './Components/Navbar'
import TopAbout from './Components/TopAbout'
import Parnter from './Components/Parnters';
import Footer from './Components/Footer'
import Hero from './Components/Destinationhero';

function About() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TopAbout/>
      <Parnter/>
      <Footer/>
    </div>
  );
}

export default About;
