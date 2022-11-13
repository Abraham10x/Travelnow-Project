import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';

export default function ChooseBox() {
  return (
    <Card sx={{ 
            maxWidth: 370, 
            height: '340px',
            
            backgroundColor: '#FFFFFF',
            bordeRadius: '10px',
            boxShadow: 'none',
            my: '50px',
        }}>
      <CardActionArea>
        <CardContent sx={{ml: '18px'}}>
        <Box sx={{ 
            width: '40px',
            height: '40px',
            backgroundColor: '#020180',
            borderRadius: '8px',
            mt: '30px',
            mb: '24px'
        }}>
            <RouteIcon 
            sx={{
                width: '31px',
                height: '31px',
                color: 'white',
                my: '4px',
                mx: '4px'
             }}/>
        </Box>
          <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700, mb: '15px' }}>
            Best Guide
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{width: '300px'}}>
            Discover Amazing Place With Exclusive Deals .Discover Amazing 
            Place With Exclusive Deals. Place With Exclusive Deals.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}