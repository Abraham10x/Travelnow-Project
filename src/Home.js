import React from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Top from './Components/Top'
import Choose from './Components/Choose';
import Headers from './Components/Header';
import Cta from './Components/Cta';
import Parnter from './Components/Parnters';
import Footer from './Components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Top/>
      <Choose/>
      <Headers/>
      <Cta/>
      <Parnter/>
      <Footer/>
    </div>
  );
}

export default Home;
