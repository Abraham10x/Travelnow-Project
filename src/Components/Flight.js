import * as React from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
import DateSchedule from './DateSchedule';


export default function Flight(){

    const StyledBox = styled(Container)`
        width: 100%;
        height: 200px;
        position: relative;
        bottom: 24px;
        right: 24px;
        box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.25);
        border-radius: 0px 15px 15px 15px;
        z-index: 1;
        padding: 0;
    `;

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <React.Fragment>
            <StyledBox maxWidth='xl' 
                sx={{
                    backgroundColor: '#FFFFFF',
                    display:{md:'block', xs:'block'},
                }}
                className='booking-height'
            >
                <div style={{paddingTop: '1.2rem'}}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Trip</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Round Trip"
                    >
                    <MenuItem value={10}>Round Trip</MenuItem>
                    <MenuItem value={20}>One Trip</MenuItem>
                    <MenuItem value={30}>Multi-city</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">1 person</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    >
                    <MenuItem value={10}>2</MenuItem>
                    <MenuItem value={20}>4 family</MenuItem>
                    <MenuItem value={30}>6 family</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Economy</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    >
                    <MenuItem value={10}>Premium Economy</MenuItem>
                    <MenuItem value={20}>Business Class</MenuItem>
                    <MenuItem value={30}>First Class</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '28ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Enter City" variant="outlined" />
                    <TextField id="filled-basic" label="Enter City" variant="outlined" />
                    <DateSchedule/>
                </Box>
            </StyledBox>
        </React.Fragment>
    )
}