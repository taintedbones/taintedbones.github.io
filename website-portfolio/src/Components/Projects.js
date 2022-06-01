import React from "react";
import ProjCard from "./ProjCard.js";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  GiDiceTwentyFacesTwenty,
  GiRingedPlanet,
  GiSpaceship,
  GiPathDistance,
} from "react-icons/gi";
import { MdOutlineCoronavirus } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { FaMapMarkedAlt, FaUserFriends } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    maxWidth: "1000px",
  },
  header: {
    color: "#c12e99",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className="projects" style={{ padding: "20px", maxWidth: "1000px" }}>
      <Typography
        variant="h4"
        className={classes.header}
        fontFamily="'Lucida Console', 'Courier New', monospace"
        paragraph
      >
        Projects
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        <ProjCard
          icon={MdOutlineCoronavirus}
          title="COVID-19 Dashboard"
          resources={["JavaScript", "Material UI", "Nivo", "Axios"]}
          text="A web application for tracking live COVID-19 data globally and in the US."
          url="https://github.com/taintedbones/covid-dash"
          link="https://taintedbones.github.io/covid-dash/"
        />
        <ProjCard
          icon={GiDiceTwentyFacesTwenty}
          title="DnD Combat Tracker"
          resources={["TypeScript", "React", "Material UI", "Firebase"]}
          text="A full stack web application for tracking combat stats and initiatives for Dungeons and Dragons"
          url="https://github.com/taintedbones/combat-track"
          link="https://combat-track.web.app/"
        />
        <ProjCard
          icon={IoMdPlanet}
          title="Space Geo"
          resources={["JavaScript", "React", "Material UI"]}
          text="An educational website highlighting how scientists use 
                geological practices to study our solar system."
          url="https://github.com/taintedbones/space-geo/tree/dev"
          link="https://taintedbones.github.io/space-geo/"
        />
        <ProjCard
          icon={GiPathDistance}
          title="Midzo"
          resources={["TypeScript", "HTML", "CSS", "Angular", "MongoDB"]}
          text="A web application for planning long distance meetings. Enter 
                two locations and find out where to meet in the middle!"
          url="https://github.com/BrChung/MeetHalfway"
        />
      </Grid>
    </div>
  );
}

export default Projects;
