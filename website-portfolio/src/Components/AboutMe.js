import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { Grid, makeStyles, Typography } from "@material-ui/core";

import Container from "react-bootstrap/Container";
import AboutPic from "../assets/about-photo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  img: {
    width:"100%",
    maxWidth: "450px"
  }
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-start" justify="center" spacing={3}>
        <Grid item xs={12} sm={6} md={5}>
          <img src={AboutPic} className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Typography variant="h4">About Me</Typography>
          <Typography variant="body2">
            Hello, my name is Kierstyn Just. I'm currently an undergraduate
            studying Computer Science at California State University, Fullerton.
            Before entering the world of programming, I was studying Fine Art
            and earned Associate's Degrees in four different fields. Pairing my
            art knowledge with a strong programming background, I am currently
            focusing these skills on Game Development. When I'm not programming
            I enjoy traveling, watching horror movies, playing video games, and
            brewery hopping!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
