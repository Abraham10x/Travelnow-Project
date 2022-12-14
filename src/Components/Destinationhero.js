import * as React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import beach from './../Images/destination-hero.png'
import { Typography } from '@mui/material';

export default function Hero() {
    const StyledContainer = styled(Container)`
      height: 50vh;
      width: 100%; 
      `
    ;


  return (
    <React.Fragment>
      <StyledContainer 
        maxWidth="false" 
        disableGutters
        sx={{ backgroundImage: `url(${beach})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
        <Container maxWidth='xl' sx={{py:'3rem'}}>
          <Typography 
            variant='h1' 
            sx={{
              pt: '100px',
              display: { xs: 'none', md: 'block' },
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '60px',
              lineHeight: '75px',
            }}>
              Looking a Vaction Package?
          </Typography>
          <Typography 
            variant='h1' 
            sx={{
              pt: '80px',
              display: { xs: 'block', md: 'none' },
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '50px',
            }}>
              Looking a Vaction Package?
          </Typography>
          <Typography 
            variant='h6' 
            sx={{
              color: 'white',
              display: { xs: 'none', md: 'block' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '30px',
              pb: '30px',
            }}>
              Discover Amazing Place With Exclusive Deals.
          </Typography>
          <Typography 
            variant='h6' 
            sx={{
              color: 'white',
              display: { xs: 'block', md: 'none' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '20px',
              py: '20px',
            }}>
              Discover Amazing Place With Exclusive Deals.
          </Typography>
        </Container>
      
      </StyledContainer>
    </React.Fragment>
  );
}
