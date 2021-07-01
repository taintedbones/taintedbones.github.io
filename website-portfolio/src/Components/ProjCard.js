import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjCard(props) {
  return (
    <Card className="Exp-Card">
      <Card.Body>
        <Card.Title>
          <center>
            <h1>
              <props.icon />
            </h1>
          </center>
        </Card.Title>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="Card-Text">
          {props.text}
        </Card.Text>
      </Card.Body>
      <Button
        variant="secondary"
        href={props.url}
        className="Card-Button"
      >
        Github
      </Button>
    </Card>
  );
}

export default ProjCard;