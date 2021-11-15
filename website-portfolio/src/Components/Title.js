import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import HeaderPic from "../assets/header-photo.jpg";
import bgPic from "../assets/neon-pattern.jpg";
import { Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    minHeight: "600px",
    backgroundImage:
      "linear-gradient(to bottom, transparent, transparent, transparent, transparent, white), url(" +
      bgPic +
      ")",
    backgroundPosition: "top",
    flexDirection: "column",
    color: "white",
    paddingTop: "20px",
  },
  img: {
    borderRadius: "50%",
    maxWidth: "300px",
  },
  link: {
    color: "white",
    '&:hover': {
      color: "#c12e99"
    },
  },
  nameText: {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
  },
}));

function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={HeaderPic} className={classes.img} />
      <Typography variant="h3" className={classes.nameText}>
        Kierstyn Just
      </Typography>
      <Typography variant="h5">Computer Scientist</Typography>
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
    </div>
  );
}

export default Title;
