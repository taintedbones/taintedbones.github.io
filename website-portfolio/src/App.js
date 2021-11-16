import React from 'react';
import Contact from './Components/Contact.js';
import Projects from './Components/Projects.js';
import AboutMe from './Components/AboutMe.js';
import Title from './Components/Title.js';
import TopNav from './Components/TopNav.js';
import TechSkills from './Components/TechSkills.js';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
  root: {},
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'inherit',
    // paddingTop: '30px',
    paddingBottom: '30px',
  },
}));

function App() {
  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className={classes.root}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TopNav />
        <div className={classes.body}>
          <Title />
          <AboutMe />
          {/* <TechSkills /> */}
          <Projects />
        </div>
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
