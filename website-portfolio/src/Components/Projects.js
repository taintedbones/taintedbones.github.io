import React from "react";
import ProjCard from "./ProjCard.js";
import { Grid, makeStyles } from "@material-ui/core";
import { GiDiceTwentyFacesTwenty, GiRingedPlanet, GiSpaceship } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";

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
          resources="Typescript, HTML, CSS, Angular, MongoDB"
          text="Long distance meetings have never been easier! Just enter
                  two locations and the meeting type. We'll find the perfect
                  middle point for you, as well as a list of business
                  recommendations."
          url="https://github.com/BrChung/MeetHalfway"
        />
        <ProjCard
          icon={GiSpaceship}
          title="Space Invaders Emulator"
          resources="Python, Pygame"
          text="An emulator of the classic arcade game, Space Invaders."
          url="https://github.com/taintedbones/space-invaders"
        />
        <ProjCard
          icon={GiDiceTwentyFacesTwenty}
          title="DnD Initiative Tracker"
          resources="CPP, QT, SQLITE"
          text="test"
          url="https://github.com/taintedbones/Dnd-Combat-Tracker"
        />
        <ProjCard
          icon={GiRingedPlanet}
          title="Space Geo"
          resources="Javascript, React, Material UI"
          text="An educational website highlighting how scientists use 
                geological practices to study our solar system. Discusses 
                the geology of each planet, our Moon, and the technologies 
                used in space to gather data."
          url="https://github.com/taintedbones/space-geo"
        />
      </Grid>
    </div>
  );
}

export default Projects;