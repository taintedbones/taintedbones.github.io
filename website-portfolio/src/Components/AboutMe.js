import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { keyframes } from '@mui/system';
import AboutPic from '../assets/about-pic.PNG';

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1000px',
    padding: '20px',
  },
  grid: {
    width: 'inherit',
  },
  header: {
    color: '#c12e99',
  },
  img: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '50%',
  },
  text: {
    color: '#ffb3ec',
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
          <Typography
            variant="h4"
            fontFamily="'Lucida Console', 'Courier New', monospace"
            className={classes.header}
          >
            Hello, my name is
          </Typography>
          <Typography
            variant="h4"
            fontFamily="'Lucida Console', 'Courier New', monospace"
            className={classes.header}
            paragraph
          >
            Kierstyn Just.
          </Typography>
          <Typography variant="h6" className={classes.text} paragraph>
            Software Engineer / Full-Stack Web Developer
          </Typography>
          <Typography variant="body2" paragraph>
            I'm currently an undergraduate studying Computer Science at
            California State University, Fullerton.
          </Typography>
          <Typography variant="body2" paragraph>
            Before entering the world of programming, I was studying Fine Art
            and earned Associate's Degrees in four different fields. Pairing my
            art and design knowledge with a strong programming background, I am currently
            focusing these skills on software engineering and full-stack web development.
          </Typography>
          <Typography variant="body2" paragraph>
            When I'm not programming I enjoy traveling, watching horror movies,
            playing video games, and brewery hopping!
          </Typography>
          <Typography variant="h3">
            <Link
              href="https://github.com/taintedbones"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <DiGithubBadge />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kierstynjust/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <AiFillLinkedin />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
