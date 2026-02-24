import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Box, Button, Toolbar, Typography } from '@mui/material';

function TopNav() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        // backgroundColor: 'white',
        backgroundImage:
          'linear-gradient(to bottom, black, black, black, transparent)',
      }}
    >
      <Toolbar variant="dense" sx={{ width: '100%', justifyContent: "flex-end" }}>
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ padding: '2px' }}
        >
          <Button variant="outlined" size="medium">About</Button>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ padding: '2px' }}
        >
          <Button variant="outlined" size="medium">Projects</Button>
        </Link>
      </Toolbar>
    </Box>
  );
}

export default TopNav;
