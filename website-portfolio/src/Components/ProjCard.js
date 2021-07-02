import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
    paper: {
    position: "relative",
    height: "100%",
    width:"100%",
    padding: "10px",
  },
}));

function ProjCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item container xs={12} sm={6} md={3}>
        <Paper elevation={5} className={classes.paper}>
          <Grid item container className={classes.grid} spacing={1} justify="space-between">
            <Grid item xs={12}>
              <Typography variant="h3">
                <props.icon />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">{props.title}</Typography>
              <Typography variant="overline">{props.resources}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{props.text}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" href={props.url} target="_blank">
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
