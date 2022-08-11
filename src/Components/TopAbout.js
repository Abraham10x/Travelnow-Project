import * as React from 'react';
import Container from '@mui/material/Container';
import DestinationCard from './DestinationsCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function TopAbout (){
    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{my: '100px'}}>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DestinationCard/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}