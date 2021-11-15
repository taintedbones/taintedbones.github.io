import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material"; 
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#7c2d84",
    '&:hover': {
      backgroundColor: "#c12e99",
    }
  },
  grid: {
    height: "100%",
  },
  paper: {
    position: "relative",
    height: "100%",
    width: "100%",
    padding: "10px",
  },
}));

function ProjCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        item
        container
        xs={12}
        sm={6}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Paper elevation={5} className={classes.paper}>
          <Grid item container className={classes.grid} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h3">
                <props.icon />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{props.title}</Typography>
              <Typography variant="body2">
                <i>{props.resources}</i>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{props.text}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                href={props.url}
                target="_blank"
                className={classes.button}
              >
                Github
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

export default ProjCard;
