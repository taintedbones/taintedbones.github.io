import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import AboutPic from '../assets/about-photo.jpg';

class AboutMe extends Component {
    render() {
        return (
            <Row className="Body-Row">
            <Container className="About-Me-Container" id="about">
              <Row className="Body-Row">
                <Col md={6} className="About-Photo-Col">
                  <Image src={AboutPic} rounded className="About-Pic"></Image>
                </Col>
                <Col sm className="About-Paragraph-Col">
                  <h3 className="Name-Text">About Me</h3>
                  <br></br>
                  <p>Hello, my name is Kierstyn Just. I'm currently an undergraduate 
                    studying Computer Science at California State University, Fullerton.</p>
                  <p>Before entering the world of programming, I was studying Fine Art and 
                    earned Associate's Degrees in four different fields. Pairing 
                    my art knowledge with a strong programming background, I am currently 
                    focusing these skills on Game Development.</p>
                  <p>When I'm not programming I enjoy traveling, watching horror movies, 
                    playing video games, and brewery hopping!</p>
                </Col>
              </Row>
            </Container>
            </Row>
        )
    }
}

export default AboutMe;