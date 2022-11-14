import * as React from 'react';
import { Container, styled, Typography } from '@mui/material';


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

    return(
        <React.Fragment>
            <StyledBox maxWidth='xl' 
                sx={{
                    backgroundColor: '#FFFFFF',
                    display:{md:'block', xs:'block'},
                    width: '100%'
                }}>
                <Typography variant='h3' color={'black'}>Item one</Typography>
            </StyledBox>
        </React.Fragment>
    )
}