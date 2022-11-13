import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Headers(){
    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{mt: '90px'}} >
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <Typography variant='h2' 
                        sx={{
                        fontFamily: 'Poppins, sans-serif',
                        display: { xs: 'none', md: 'block' },
                        fontWeight: 700,
                        fontSize: '45px',
                        lineHeight: '70px',
                        maxWidth: 600,
                        }}
                        >Travel Any Corner Of The 
                        World With Travelnow</Typography>
                        <Typography variant='p' 
                        sx={{
                        fontFamily: 'Poppins, sans-serif',
                        display: { xs: 'block', md: 'none' },
                        fontWeight: 700,
                        fontSize: '40px',
                        lineHeight: '40px',
                        }}
                        >Travel Any Corner Of The 
                        World With Travelnow</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography 
                            variant='h6'
                            sx={{
                            display: { xs: 'none', md: 'block' },
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '20px',
                            pt: '30px',
                            maxWidth: 480, 
                            }}>
                            Discover Amazing Place With Exclusive Deals .Discover Amazing 
                            Place With Exclusive Deals. Place With Exclusive Deals. Discover 
                            Amazing Place With Exclusive Deals .Discover Amazing Place With Exclusive 
                            </Typography>

                            <Typography 
                            variant='h6' 
                            sx={{
                            display: { xs: 'block', md: 'none' },
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            pt: '15px', 
                            }}>
                            Discover Amazing Place With Exclusive Deals .Discover Amazing 
                            Place With Exclusive Deals. Place With Exclusive Deals. Discover 
                            Amazing Place With Exclusive Deals .Discover Amazing Place With Exclusive
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}