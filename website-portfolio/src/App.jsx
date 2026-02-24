import React from 'react';
import Contact from './Components/Contact.jsx';
import Projects from './Components/Projects.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Title from './Components/Title.jsx';
import TopNav from './Components/TopNav.jsx';
import TechSkills from './Components/TechSkills.jsx';
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
