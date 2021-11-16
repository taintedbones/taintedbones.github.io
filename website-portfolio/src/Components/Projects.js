import React from 'react';
import ProjCard from './ProjCard.js';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  GiDiceTwentyFacesTwenty,
  GiRingedPlanet,
  GiSpaceship,
  GiPathDistance,
} from 'react-icons/gi';
import { IoMdPlanet } from 'react-icons/io';
import { FaMapMarkedAlt, FaUserFriends } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    maxWidth: '1000px',
  },
  header: {
    color: '#c12e99',
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className="projects" style={{ padding: '20px', maxWidth: '1000px' }}>
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
          icon={GiPathDistance}
          title="Midzo"
          resources={['Typescript', 'HTML', 'CSS', 'Angular', 'MongoDB']}
          text="A web application for planning long ditance meetings."
          url="https://github.com/BrChung/MeetHalfway"
        />
        <ProjCard
          icon={GiSpaceship}
          title="Space Invaders Emulator"
          resources={['Python', 'Pygame']}
          text="An emulator of the classic arcade game, Space Invaders."
          url="https://github.com/taintedbones/space-invaders"
        />
        <ProjCard
          icon={GiDiceTwentyFacesTwenty}
          title="DnD Initiative Tracker"
          resources={['CPP', 'QT', 'SQLITE']}
          text="A desktop application for tracking combat stats and initiatives for Dungeons and Dragons"
          url="https://github.com/taintedbones/Dnd-Combat-Tracker"
        />
        <ProjCard
          icon={IoMdPlanet}
          title="Space Geo"
          resources={['Javascript', 'React', 'Material UI']}
          text="An educational website highlighting how scientists use 
                geological practices to study our solar system."
          url="https://github.com/taintedbones/space-geo/tree/dev"
          link="https://taintedbones.github.io/space-geo/"
        />
      </Grid>
    </div>
  );
}

export default Projects;
