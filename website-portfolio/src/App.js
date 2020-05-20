import React from 'react';
import logo from './logo.svg';
import SuperMarioIcon from './assets/super-mario.png';
import MapIcon from './assets/index.png';
import InvaderIcon from './assets/space-invader.png';
import HeaderPic from './assets/header-photo.jpg';
import AboutPic from './assets/about-photo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import * as Scroll from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar className="Top-Nav" fixed="top" bg="dark" variant="dark" expand="md">
        <Navbar.Brand>Kierstyn Just</Navbar.Brand>

      </Navbar>
      <header className="App-header">
        <Row>
        <Container>
          {/* <Row className="Header=Row">  */}
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
                      className="Icon-Button"
                      variant="link"><h1><DiGithubBadge /></h1></Button>
              <Button href="https://www.linkedin.com/in/kierstynjust/"
                      className="Icon-Button"
                      variant="link"><h1><AiFillLinkedin /></h1></Button>
            </Row>
          {/* </Row> */}
        </Container>
        </Row>
      </header>
      {/* ABOUT ME SECTION */}
      <Row className="Body-Row">
      <Container className="About-Me-Container" name="about">
        <Row className="Body-Row">
          <Col md={5} className="About-Photo-Col">
            <Image src={AboutPic} rounded className="About-Pic"></Image>
          </Col>
          <Col sm className="About-Paragraph-Col">
            <h3>About Me</h3>
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
      {/* EXPERIENCE SECTION */}
      <Row>
      <Container className="Experience-Container">
      <h3 className="Section-Header">Experience</h3>
        <Row className="Body-Row">
          <Card className="Exp-Card">
            <Card.Img variant="top" src={MapIcon} className="Exp-Img"></Card.Img>
            <Card.Body>
              <Card.Title>Midzo</Card.Title>
              <Card.Text className="Card-Text">
                Long distance meetings have never been easier! Just enter two 
                locations and the meeting type. We'll find the perfect middle
                point for you, as well as a list of business recommendations. 
              </Card.Text>
              <Button variant="secondary"
                      href = "https://github.com/BrChung/MeetHalfway">Github</Button>
            </Card.Body>
          </Card>
          <Card className="Exp-Card">
            <Card.Img variant="top" src={SuperMarioIcon} className="Exp-Img"></Card.Img>
            <Card.Body>
              <Card.Title>Super Mario Bros Emulator</Card.Title>
              <Card.Text className="Card-Text">
                An emulator of the Nintendo classic, Super Marios Bros. 
                Written using Pygame for playing on PC. 
              </Card.Text>
              <Button variant="secondary"
                      href="https://github.com/TheSoullessOne/Mario_Levels">Github</Button>
            </Card.Body>
          </Card>
          <Card className="Exp-Card">
            <Card.Img variant="top" src={InvaderIcon} className="Exp-Img"></Card.Img>
            <Card.Body>
              <Card.Title>Space Invaders Emulator</Card.Title>
              <Card.Text className="Card-Text">
                An emulator of the classic arcade game, Space Invaders. 
              </Card.Text>
              <Button variant="secondary"
                      href="https://github.com/taintedbones/space-invaders">Github</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      </Row>
      {/* CONTACT SECTION */}
      <div className="Contact-Me-Container">
         <h3 className="Section-Header">Contact Me</h3>
         <p><AiOutlineMail /> kjust@csu.fullerton.edu</p>
      </div>
    </div>
  );
}

export default App;
