import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>Kierstyn Just</Navbar.Brand>
          <DropdownButton className="Menu-Dropdown" variant="secondary" title="Menu">
            <Dropdown.Item eventKey="1">About Me</Dropdown.Item>
            <Dropdown.Item eventKey="2">Experience</Dropdown.Item>
            <Dropdown.Item eventKey="3">Contact Me</Dropdown.Item>
          </DropdownButton>
        </Navbar>
        <Container>
          <h1>Kierstyn Just</h1>
          <h4>Software Engineer</h4>
        </Container>
      </header>
      <Container>
        <h3>About Me</h3>
      </Container>
      <Container>
        <h3>Experience</h3>
      </Container>
      <Container>
        <h3>Contact Me</h3>
      </Container>
    </div>
  );
}

export default App;
