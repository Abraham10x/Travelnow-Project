import * as React from 'react';
import Container from '@mui/material/Container';
import DestinationCard from './DestinationsCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link } from "react-router-dom";

export default function Footer(){
    return(
        <React.Fragment>
            <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 900,
                            fontSize: '42px',
                            lineHeight: '63px',
                            color: 'primary',
                            textDecoration: 'none',
                            }}
                        >
                            travelnow
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 900,
                            fontSize: '29px',
                            color: 'primary',
                            textDecoration: 'none',
                            }}
                        >
                            travelnow
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{maxWidth: '400px', width: '100%'}}>
                            Discover Amazing Place With Exclusive Deals .Discover Amazing 
                            Place With Exclusive Deals. Place With Exclusive Deals.
                        </Typography>
                        <Box sx={{ maxWidth: '400px', width: '100%', mb: '70px'}}>
                            <Grid container spacing={0}>
                                <Grid item xs={3} md={3}>
                                <Box 
                                    sx=
                                    {{
                                        borderRadius: '100%', 
                                        width: '50px', height: '50px', 
                                        backgroundColor: '#FFFFFF', 
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: '#020180',
                                        color: '#020180',
                                        mt: '50px'
                                        }}>
                                <InstagramIcon color='#020180' fontSize='medium' sx={{py: '13px', px: '13px'}}/>
                                </Box>
                                </Grid>
                                <Grid item xs={3} md={3}>
                                <Box 
                                    sx=
                                    {{
                                        borderRadius: '100%', 
                                        width: '50px', height: '50px', 
                                        backgroundColor: '#FFFFFF', 
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: '#020180',
                                        color: '#020180',
                                        mt: '50px'
                                        }}>
                                <FacebookRoundedIcon color='#020180' fontSize='medium' sx={{py: '13px', px: '13px'}}/>
                                </Box>
                                </Grid>
                                <Grid item xs={3} md={3}>
                                <Box 
                                    sx=
                                    {{
                                        borderRadius: '100%', 
                                        width: '50px', height: '50px', 
                                        backgroundColor: '#FFFFFF', 
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: '#020180',
                                        color: '#020180',
                                        mt: '50px'
                                        }}>
                                <TwitterIcon color='#020180' fontSize='medium' sx={{py: '13px', px: '13px'}}/>
                                </Box>
                                </Grid>
                                <Grid item xs={3} md={3}>
                                <Box 
                                    sx=
                                    {{
                                        borderRadius: '100%', 
                                        width: '50px', height: '50px', 
                                        backgroundColor: '#FFFFFF', 
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: '#020180',
                                        color: '#020180',
                                        mt: '50px'
                                        }}>
                                <LinkedInIcon color='#020180' fontSize='medium' sx={{py: '13px', px: '13px'}}/>
                                </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid>
                        <Typography
                            variant="h6"
                            noWrap
                            component="p"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '25px',
                            lineHeight: '63px',
                            color: '#020180',
                            textDecoration: 'none',
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            width: '100%',
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            About Us
                        </Typography>
                        <Link to="/about">
                        <Typography
                            variant="h6"
                            component="p"
                            href="/"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            Destination
                        </Typography>
                        </Link>
                        <Typography
                            variant="h6"
                            component="p"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            variant="h6"
                            component="p"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            Blog
                        </Typography>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid>
                            <Grid item xs={12}>
                                
                        <Typography
                            variant="h6"
                            noWrap
                            component="p"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '25px',
                            lineHeight: '63px',
                            color: '#020180',
                            textDecoration: 'none',
                            }}
                        >
                            Team
                        </Typography>
                        <Typography
                            variant="h6"
                            component="p"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            Feedbacks
                        </Typography>
                        <Typography
                            variant="h6"
                            component="p"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            Policy
                        </Typography>
                        <Typography
                            variant="h6"
                            component="p"
                            color="text.secondary"
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontSize: '21px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            }}
                        >
                            FAQs
                        </Typography>
                        </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}