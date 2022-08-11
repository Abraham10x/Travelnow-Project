import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ChooseBox from './ChooseBox'
import ChooseMain from './ChooseMain'
import { Typography } from '@mui/material';

export default function Choose (){
    return(
        <React.Fragment>
            <Container maxWidth='false' sx={{ backgroundColor: '#F0F2F5', }}>
                <Container maxWidth='xl' >
                    <Typography variant='h2' 
                        sx={{
                        fontFamily: 'Poppins, sans-serif',
                        display: { xs: 'none', md: 'block' },
                        fontWeight: 700,
                        fontSize: '45px',
                        lineHeight: '70px',
                        pt: '50px',
                        textAlign: 'center'
                        }}
                    >Why Choose Us</Typography>
                    <Typography variant='p' 
                        sx={{
                        fontFamily: 'Poppins, sans-serif',
                        display: { xs: 'block', md: 'none' },
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '40px',
                        lineHeight: '40px',
                        }}
                    >Why Choose Us</Typography>

                    <Typography 
                        variant='h6' align='center'
                        sx={{
                        display: { xs: 'none', md: 'block' },
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '20px',
                        pb: '60px'
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
                                <ChooseBox/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ChooseMain/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ChooseMain/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, justifyContent: 'center', mb: '100px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <ChooseBox/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ChooseMain/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ChooseMain/>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Container>
        </React.Fragment>
    )
}