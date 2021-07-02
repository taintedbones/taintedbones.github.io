import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProjCard from "./ProjCard.js";
import { Grid, makeStyles } from "@material-ui/core";

import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { GiTurtleShell } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiSpaceship } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className="Name-Text">Projects</h3>
      <Grid container justify="center" spacing={2}>
        <ProjCard
          icon={FaMapMarkedAlt}
          title="Midzo"
          text="Long distance meetings have never been easier! Just enter
                  two locations and the meeting type. We'll find the perfect
                  middle point for you, as well as a list of business
                  recommendations."
          url="https://github.com/BrChung/MeetHalfway"
        />
        <ProjCard
          icon={GiSpaceship}
          title="Space Invaders Emulator"
          text="An emulator of the classic arcade game, Space Invaders."
          url="https://github.com/taintedbones/space-invaders"
        />
        <ProjCard
          icon={GiDiceTwentyFacesTwenty}
          title="DnD Initiative Tracker"
          text="test"
          url="http://www.google.com/"
        />
        <ProjCard
          icon={GiDiceTwentyFacesTwenty}
          title="Space Geo"
          text="test"
          url="http://www.google.com/"
        />
      </Grid>
    </div>
  );
}

export default Projects;
