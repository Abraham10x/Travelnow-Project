import React from 'react';
import Navbar from './Components/Navbar'
import TopAbout from './Components/TopAbout'
import Parnter from './Components/Parnters';
import Footer from './Components/Footer'

function About() {
  return (
    <div>
      <Navbar/>
      <TopAbout/>
      <Parnter/>
      <Footer/>
    </div>
  );
}

export default About;
