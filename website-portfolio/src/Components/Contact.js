import React from "react";
import { Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AiOutlineMail } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    color: "white",
    backgroundColor: "#050405",
    width: "inherit",
    padding: "20px",
  },
  header: {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
  },
  link: {
    color: "white",
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>Contact Me</Typography>
      <Typography variant="body2">
        <Link href="mailto:kjust@csu.fullerton.edu" className={classes.link}>
          <AiOutlineMail /> kjust@csu.fullerton.edu
        </Link>
      </Typography>
    </div>
  );
}

export default Contact;
