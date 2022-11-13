import * as React from 'react';
import Container from '@mui/material/Container';
import DestinationCard from './DestinationsCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import destinations from '../Components/TopAboutData'
import { Typography } from '@mui/material';


export default function TopAbout (){
    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{my: '3rem'}}>
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
                display: { xs: 'block', md: 'none', mb: '8rem' },
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
                <Box sx={{ flexGrow: 1, width: '100%', mt: '4rem' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} sx={{justifyContent: 'center'}}>
                        { destinations.map( item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id} sx={{mx: 'auto'}}>
                            <DestinationCard
                                key={item.id}
                                image={item.image}
                                city={item.city}
                                rating={item.rating}
                                review={item.reviews}
                            />
                        </Grid>))}
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}