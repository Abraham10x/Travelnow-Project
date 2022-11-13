import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardMedia} from '@mui/material';
import logo1 from './../Images/LATA.jpg'
import logo2 from './../Images/Flutter.jpg'
import logo3 from './../Images/Interswitch.jpg'
import logo5 from './../Images/Amedeus.jpg'

export default function Parnter (){
    return (
        <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', my: '100px', mx: 'auto', px: 'auto'}}>
                <Grid container spacing={1} sx={{gap: '2rem, 0'}}>
                    <Grid item xs={12} sm={4} md={3}>
                        <CardMedia
                            component="img"
                            image={logo1}
                            alt="Tourist Attraction"
                            sx={{
                                width: '200px',
                                height: '50px',
                                mx: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                    <CardMedia
                            component="img"
                            image={logo2}
                            alt="Tourist Attraction"
                            sx={{
                                width: '200px',
                                height: '50px',
                                mx: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                    <CardMedia
                            component="img"
                            image={logo3}
                            alt="Tourist Attraction"
                            sx={{
                                width: '200px',
                                height: '50px',
                                mx: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                    <CardMedia
                            component="img"
                            image={logo5}
                            alt="Tourist Attraction"
                            sx={{
                                width: '200px',
                                height: '50px',
                                mx: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}