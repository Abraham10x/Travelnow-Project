import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardMedia, Typography } from '@mui/material';
import image from './../Images/CTA.jpg'
import star from '../Images/star.svg'

export default function CTA (){
    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{py: '5rem', position: 'relative'}} >
            <Box sx={{ flexGrow: 1, justifyContent: 'center'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}sm={6} md={6}>
                        <CardMedia
                            component="img"
                            height="700"
                            image={image}
                            alt="Tourist Attraction"
                            sx={{
                                width: '100%',
                                borderRadius: '30px',
                                mr: '90px',
                                maxWidth: '680px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{borderRadius: '100%', width: '57px', height: '57px', backgroundColor: '#020180', color: '#FFFFFF', mb: '18px',}}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ 
                            fontWeight: 700, 
                            mb: '15px',
                            fontSize: '22px', py: '15px', px: '15px'
                            }}>
                            01.
                        </Typography>
                            </Box>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700, mb: '15px', mt: '25px'}}>
                            Get The Best Deals
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{maxWidth: '400px', width: '100%'}}>
                            Discover Amazing Place With Exclusive Deals .Discover Amazing 
                            Place With Exclusive Deals. Place With Exclusive Deals.
                        </Typography>

                        <Box sx={{borderRadius: '100%', width: '57px', height: '57px', backgroundColor: '#FFB712', color: '#FFFFFF', mb: '18px', mt: '25px'}}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ 
                            fontWeight: 700, 
                            mb: '15px',
                            fontSize: '22px', py: '15px', px: '15px'
                            }}>
                            02.
                        </Typography>
                            </Box>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700, mb: '15px' }}>
                            Trusted And Free
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{maxWidth: '400px', width: '100%'}}>
                            Discover Amazing Place With Exclusive Deals .Discover Amazing 
                            Place With Exclusive Deals. Place With Exclusive Deals.
                        </Typography>
                        <div className='rate-box'>
                            <Typography variant='h4'>Rate Us</Typography>
                            <div style={{display: 'flex', marginTop: '1rem'}}>
                                <img
                                    src={star}
                                    alt='star-icon'
                                />
                                <img
                                    src={star}
                                    alt='star-icon'
                                />
                                <img
                                    src={star}
                                    alt='star-icon'
                                />
                                <img
                                    src={star}
                                    alt='star-icon'
                                />
                                <img
                                    src={star}
                                    alt='star-icon'
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </React.Fragment>
    )
}