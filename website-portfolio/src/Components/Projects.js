import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProjCard from "./ProjCard.js";

import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { GiTurtleShell } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiSpaceship } from "react-icons/gi";

var _xs = 12;
var _sm = 6;
var _md = 6;
var _lg = 3;

class Projects extends Component {
  render() {
    return (
      <Container className="Experience-Container" id="experience">
        <h3 className="Name-Text">Projects</h3>
        {/* <CardGroup> */}
        <Row>
          <Container className="Experience-Cards-Container">
            <Row>            
              <Col xs={_xs} sm={_sm} md={_md} lg={_lg} className="Exp-Col">
                <ProjCard
                  icon={FaMapMarkedAlt}
                  title="Midzo"
                  text="Long distance meetings have never been easier! Just enter
                  two locations and the meeting type. We'll find the perfect
                  middle point for you, as well as a list of business
                  recommendations."
                  url="https://github.com/BrChung/MeetHalfway"
                />
              </Col>
              {/* <Col xs={_xs} sm={_sm} md={_md} lg={_lg} className="Exp-Col">
                <ProjCard
                  icon={GiTurtleShell}
                  title="Super Mario Bros Emulator"
                  text="An emulator of the Nintendo classic, Super Marios Bros.
                  Written using Pygame for playing on PC."
                  url="https://github.com/TheSoullessOne/Mario_Levels"
                />
              </Col> */}
              <Col xs={_xs} sm={_sm} md={_md} lg={_lg} className="Exp-Col">
                <ProjCard
                  icon={GiSpaceship}
                  title="Space Invaders Emulator"
                  text="An emulator of the classic arcade game, Space Invaders."
                  url="https://github.com/taintedbones/space-invaders"
                />
              </Col>
              <Col xs={_xs} sm={_sm} md={_md} lg={_lg} className="Exp-Col">
                <ProjCard
                  icon={GiDiceTwentyFacesTwenty}
                  title="DnD Initiative Tracker"
                  text="test"
                  url="http://www.google.com/"
                />
              </Col>
              <Col xs={_xs} sm={_sm} md={_md} lg={_lg} className="Exp-Col">
                <ProjCard
                  icon={GiDiceTwentyFacesTwenty}
                  title="Space Geo"
                  text="test"
                  url="http://www.google.com/"
                />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Projects;
