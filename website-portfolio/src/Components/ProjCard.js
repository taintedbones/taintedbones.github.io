import React from 'react';
import { Button, Chip, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#7c2d84',
    '&:hover': {
      backgroundColor: '#c12e99',
    },
  },
  grid: {
    height: '100%',
  },
  paper: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: '10px',
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
          <Grid item container className={classes.grid} spacing={2}>
            <Grid
              item
              container
              xs={12}
              spacing={1}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h3">
                  <props.icon />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">{props.title}</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              {props.resources.map((item) => 
                <Grid item>
                  <Chip size="small" variant="outlined" label={item} />
                </Grid>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{props.text}</Typography>
            </Grid>
            <Grid item container spacing={1} justifyContent="flex-start">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  href={props.url}
                  target="_blank"
                  className={classes.button}
                >
                  Github
                </Button>
              </Grid>
              {props.link && (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={props.link}
                    target="_blank"
                    className={classes.button}
                  >
                    Link
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

export default ProjCard;
