import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    height: "100%",
    padding: "10px",
  },
}));

function ProjCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item container xs={12} sm={6} md={3}>
        <Paper elevation={5} className={classes.paper}>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3">
                <props.icon />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">{props.title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{props.text}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" href={props.url}>
                Github
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
    // <Card className="Exp-Card">
    //   <Card.Body>
    //     <Card.Title>
    //       <center>
    //         <h1>
    //           <props.icon />
    //         </h1>
    //       </center>
    //     </Card.Title>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text className="Card-Text">
    //       {props.text}
    //     </Card.Text>
    //   </Card.Body>
    //   <Button
    //     variant="secondary"
    //     href={props.url}
    //     className="Card-Button"
    //   >
    //     Github
    //   </Button>
    // </Card>
  );
}

export default ProjCard;
