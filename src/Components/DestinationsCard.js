import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';

export default function DestinationCard({image, city, rating, review}) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'none', boxShadow: 'none'}}>
      <CardMedia
        component="img"
        height="328"
        image={image}
        alt="Tourist Attraction"
        sx={{
            borderRadius: '24px'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700 }} align='center'>
            {city}
        </Typography>

        <Box sx={{
            width: '170px',
            height: '32px',

            backgroundColor: '#E6E6E6',
            borderRadius: '18px',
            display: 'flex',
            mx: 'auto'
        }}>
            <StarIcon fontSize='medium' sx={{color: '#FFCE31', mt: '4px',
                mx: '6px',}}/>
            <Typography gutterBottom variant="h6" sx={{ fontWeight: 700}} component="div" align='center'>
                {rating}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mt: '7px',
                ml: '6px',
            }} component="div" 
            >
                {`(${review})`}
            </Typography>
        </Box>

      </CardContent>
    </Card>
  );
}