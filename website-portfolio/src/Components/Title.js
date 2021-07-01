import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from 'react-bootstrap/Image';
import HeaderPic from '../assets/header-photo.jpg';
import '../App.css';

class Title extends Component {
  render() {
    return (
      // <header className="App-header">
        <Row>
          <div className="Header-Title">
            <Row className="Header-Row">
              <Image src={HeaderPic} roundedCircle className="Header-Pic"></Image>
            </Row>
            <Row className="Header-Row">
              <h1 className="Name-Text">Kierstyn Just</h1>
            </Row>
            <Row className="Header-Row">
              <h4>Software Engineer</h4>
            </Row>
            <Row className="Header-Row">
              <Button href="https://github.com/taintedbones"
                className="App-link"
                variant="link"><h1><DiGithubBadge /></h1></Button>
              <Button href="https://www.linkedin.com/in/kierstynjust/"
                className="App-link"
                variant="link"><h1><AiFillLinkedin /></h1></Button>
            </Row>
          </div>
        </Row>
      // </header>
    )
  }
}

export default Title;