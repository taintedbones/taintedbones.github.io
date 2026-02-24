import React from "react";
import { Button, Link, Typography } from "@mui/material";
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
    color: "#c12e99",
  },
  link: {
    color: "white",
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        className={classes.header}
        fontFamily="'Lucida Console', 'Courier New', monospace"
      >
        Contact Me
      </Typography>
      <Button variant="text" startIcon={<AiOutlineMail />}>
        <Link
          href="mailto:kierstyn.erin@gmail.com"
          className={classes.link}
          underline="none"
        >
          kierstyn.erin@gmail.com
        </Link>
      </Button>
    </div>
  );
}

export default Contact;
