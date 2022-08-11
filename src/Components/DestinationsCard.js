import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import Spain from './../Images/Spain.jpg'

export default function DestinationCard() {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'none', boxShadow: 'none'}}>
      <CardMedia
        component="img"
        height="328"
        image={Spain}
        alt="Tourist Attraction"
        sx={{
            borderRadius: '24px'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700 }} align='center'>
            Athens Greece
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
                4.4
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mt: '7px',
                ml: '6px',
            }} component="div" 
            >
                (2.2k Review)
            </Typography>
        </Box>

      </CardContent>
    </Card>
  );
}