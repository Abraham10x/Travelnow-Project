import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import {TabPanel, TabContext} from '@mui/lab/';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Button, styled } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Flight from './Flight';
import './../App.css'

export default function SelectionTabs() {
  const [value, setValue] = React.useState('one');
  // const [style, setStyle] = React.useState(true);
    // const focus = style ? '#757ce8' : '#002884'
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const StyledButton = styled(Button)
  `
    width: 122px;
    height: 50px;
    border: none;
    :hover: {
        backgroundColor: '#757ce8';
    }
  `
  ;

  const StyleTabPanel = styled(TabPanel)`
    paddding-left: 0;
    paddding-right: 0;
  `;

  
  return (
    <Box color={'white'}>
        <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {/* {        <Tab value="one" label="Item One" startIcon={<FlightTakeoffIcon/>}/>
        <Tab value="two" label="Item Two" />} */}
        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{border: 'none', mt: '10px'}}>
        {value === 'one' ? 
            <StyledButton startIcon={<FlightTakeoffIcon/>}  onClick={(event)=> {setValue('one')}} 
            sx={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '15px 0px 0px 0px',
                color: '#000000',
            }}>Flight</StyledButton> 
            :<StyledButton startIcon={<FlightTakeoffIcon sx={{ color: '#FFFFFF'}}/>}  onClick={(event)=> {setValue('one')}} 
            sx={{ 
                backgroundColor: '#3f50b5',
                color: '#FFFFFF',
                borderRadius: '15px 0px 0px 0px',
            }}>Flight</StyledButton>  
        }
        {value === 'two' ? 
            <StyledButton startIcon={<HotelIcon/>}  onClick={(event)=> {setValue('two')}} 
            sx={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '0px 0px 0px 0px',
                color: '#000000',
            }}>Hotel</StyledButton> 
            :<StyledButton startIcon={<HotelIcon sx={{ color: '#FFFFFF'}}/>}  onClick={(event)=> {setValue('two')}} 
            sx={{ 
                backgroundColor: '#3f50b5',
                borderRadius: '0px 0px 0px 0px',
                color: '#FFFFFF',
            }}>Hotel</StyledButton>  
        }
        {value === 'three' ? 
            <StyledButton startIcon={<DirectionsCarIcon/>}  onClick={(event)=> {setValue('three')}} size='small'
            sx={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '0px 15px 0px 0px',
                color: '#000000',
            }}>Rent Car</StyledButton> 
            :<StyledButton startIcon={<DirectionsCarIcon sx={{ color: '#FFFFFF'}}/>}  onClick={(event)=> {setValue('three')}} size='small'
            sx={{ 
                backgroundColor: '#3f50b5',
                borderRadius: '0px 15px 0px 0px',
                color: '#FFFFFF',
            }}>Rent Car</StyledButton>  
        }
        </ButtonGroup>
      </Tabs>

        <StyleTabPanel value={'one'} sx={{ p: 'none'}} >
          <Flight/>
        </StyleTabPanel>
        <TabPanel value={'two'}>
          <Flight/>
        </TabPanel>
        <TabPanel value={'three'}>
          <Flight/>
        </TabPanel>
        </TabContext>
    </Box>
  );
}
