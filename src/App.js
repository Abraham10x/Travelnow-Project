import React from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Button startIcon={<Add/>} variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
