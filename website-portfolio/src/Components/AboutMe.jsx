import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiDownload } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { Button, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { keyframes, maxWidth } from "@mui/system";
import ResumeDoc from "../assets/Kierstyn-Just-Resume.pdf";
import AboutPic from "../assets/about-pic.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000px",
    padding: "50px 20px 20px",
  },
  grid: {
    width: "inherit",
  },
  header: {
    color: "#c12e99",
  },
  img: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "50%",
  },
  link: {
    textDecoration: "none",
  },
  text: {
    color: "#ffb3ec",
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div
      className="about-me"
      style={{ maxWidth: "1000px", padding: "50px 20px 20px" }}
    >
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
            I graduated from California State University, Fullerton with a B.S.
            in Computer Science.
          </Typography>
          <Typography variant="body2" paragraph>
            Before entering the world of programming, I was studying Fine Art
            and earned Associate's Degrees in four different fields. Pairing my
            art and design knowledge with a strong programming background, I am
            currently focusing these skills on software engineering and
            full-stack web development.
          </Typography>
          <Typography variant="body2" paragraph>
            When I'm not programming I enjoy traveling, watching horror movies,
            playing video games, and brewery hopping!
          </Typography>
          <Grid item container spacing={2}>
            <Grid item>
              <Link
                href="https://github.com/taintedbones"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
                underline="none"
              >
                <Button variant="outlined" startIcon={<DiGithubBadge />}>
                  Github
                </Button>
              </Link>
            </Grid>
            <Grid item>
              {/* <a href={ResumeDoc} download>
                <Button variant="outlined" startIcon={<FiDownload />}>
                  Resume
                </Button>
              </a> */}
              <Link href={ResumeDoc} download className={classes.link} underline="none">
                <Button variant="outlined" startIcon={<FiDownload />}>
                  Resume
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
