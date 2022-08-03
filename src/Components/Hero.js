import * as React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import plane from './../Images/Plane.jpg'
import { Typography } from '@mui/material';

export default function Hero() {
    const StyledContainer = styled(Container)`
      height: 50vh;
      width: 100%; `
    ;

  return (
    <React.Fragment>
      <StyledContainer 
        maxWidth="false" 
        disableGutters
        sx={{ backgroundImage: `url(${plane})` }}
      >
        <Typography variant='h1'>Find Next Place To Visit</Typography>
        <Typography variant='h6'>Discover Amazing Place With Exclusive Deals.</Typography>
      
      </StyledContainer>
    </React.Fragment>
  );
}
