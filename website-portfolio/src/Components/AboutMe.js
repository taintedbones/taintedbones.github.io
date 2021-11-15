import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AboutPic from '../assets/about-photo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1000px',
    padding: '20px',
  },
  grid: {
    width: 'inherit',
  },
  header: {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
  },
  img: {
    width: '100%',
    maxWidth: '450px',
    borderRadius: '2%',
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        spacing={3}
        className={classes.grid}
      >
        <Grid item xs={12} sm={6} md={6}>
          <img src={AboutPic} className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" className={classes.header} paragraph>
            About Me
          </Typography>
          <Typography variant="body2" paragraph>
            Hello, my name is Kierstyn Just. I'm currently an undergraduate
            studying Computer Science at California State University, Fullerton.
          </Typography>
          <Typography variant="body2" paragraph>
            Before entering the world of programming, I was studying Fine Art
            and earned Associate's Degrees in four different fields. Pairing my
            art knowledge with a strong programming background, I am currently
            focusing these skills on game development and web development.
          </Typography>
          <Typography variant="body2">
            When I'm not programming I enjoy traveling, watching horror movies,
            playing video games, and brewery hopping! 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
