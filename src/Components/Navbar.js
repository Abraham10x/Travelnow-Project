import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const pages = [
  {
    id: 1,
    title: 'Bookings',
    link: '/'
  }, 
  {
    id: 3,
    title: 'Destination',
    link: '/about'
  }, 
  {
    id: 3,
    title:'About Us',
    link: '/about'
  }];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledToolbar = styled(Toolbar)
`    color: inherit;
    display: {md: flex};
    justifyContent: space-between;
    box-shadow: none;
    `
  ;

  return (
    <AppBar position="static" color='lightMode'>
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
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
              color: '#020180 !important',
              textDecoration: 'none',
            }}
          >
            travelnow
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} key={page.id} style={{textDecoration: 'none', color: '#000000'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
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
              color: '#020180 !important',
              textDecoration: 'none',
            }}
          >
            travelnow
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.link} key={page.id} style={{textDecoration: 'none'}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: '1rem', color: '#000000', fontSize: '16px', display: 'block' }}
              >
                {page.title}
              </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end' }}>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <Button 
              variant="contained" 
              size='large' 
              color='secondary'
              sx={{
                color: '#FFF',
                display: { xs: 'none', md: 'flex' }
              }}
            >Get Started
            </Button>
            </Link>
            <Link to="/about" style={{textDecoration: 'none'}}>
            <Button 
              variant="contained" 
              size='small' 
              color='secondary'
              sx={{
                color: 'white',
                display: { xs: 'flex', md: 'none' }
              }}
            >Get Started
            </Button>
            </Link>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
