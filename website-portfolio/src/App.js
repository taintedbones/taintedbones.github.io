import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact.js";
import Projects from "./Components/Projects.js";
import AboutMe from "./Components/AboutMe.js";
import Title from "./Components/Title.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "inherit",
    paddingTop: "30px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title />
      <div className={classes.body}>
        <AboutMe />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
