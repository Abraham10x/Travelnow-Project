import * as React from 'react';
import Container from '@mui/material/Container';
import DestinationCard from './DestinationsCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Kashmir from '../../src/Images/destination/Kashmir-india.png'
import Florence from '../../src/Images/destination/florence-italy.png'
import Kandy from '../../src/Images/destination/kandy-sri-lanka.png'


export default function Top (){
    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{mb: '100px'}}>
            <Typography variant='h2'
            sx={{
              fontFamily: 'Poppins, sans-serif',
              display: { xs: 'none', md: 'block' },
              fontWeight: 700,
              fontSize: '45px',
              lineHeight: '70px',
              mt: '90px',
            }}
          >Explore Top Destination</Typography>
          <Typography variant='p' 
            sx={{
              display: { xs: 'block', md: 'none' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '40px',
            }}
          >Explore Top Destination</Typography>

          <Typography 
            variant='h6'
            sx={{
              display: { xs: 'none', md: 'block' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '20px',
              mb: '90px',
            }}>
              Discover Amazing Place With Exclusive Deals.
          </Typography>

          <Typography 
            variant='h6' 
            sx={{
              display: { xs: 'block', md: 'none' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '20px',
              py: '15px',
            }}>
              Discover Amazing Place With Exclusive Deals.
          </Typography>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <DestinationCard
                              image={Kashmir}
                              city='Kashmir, India'
                              rating='3.9'
                              review='1.8k reviews'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard
                                image={Florence}
                                city='Florence, Italy'
                                rating='4.5'
                                review='3.5k reviews'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard
                              image={Kandy}
                              city='Kandy, Sri Lanka'
                              rating='2.5'
                              review='2.9k reviews'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}