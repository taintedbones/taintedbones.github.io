import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Scroll from 'react-scroll';
import Contact from './Components/Contact.js';
import Projects from './Components/Projects.js';
import AboutMe from './Components/AboutMe.js';
import Title from './Components/Title.js';
import TopNav from './Components/TopNav.js';

function App() {
  return (
    <div className="App">
      {/* <Navbar className="Top-Nav" fixed="top" bg="dark" variant="dark" expand="md">
        <Navbar.Brand>Kierstyn Just</Navbar.Brand>

      </Navbar> */}
      <header className="App-header">
        {/* <TopNav /> */}
        <Title />
      </header>

      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
