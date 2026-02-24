import React from 'react';
import bgPic from '../assets/neon-pattern.jpg';
import { Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    height: '300px',
    backgroundImage:
      'linear-gradient(to bottom, transparent, transparent, #121212), url(' +
      bgPic +
      ')',
    backgroundPosition: 'top',
    flexDirection: 'column',
    color: 'white',
  },
}));

function Title() {
  const classes = useStyles();

  // return <div className={classes.root}></div>;
  return(
    <Box className={classes.root}></Box>
  );
}

export default Title;
