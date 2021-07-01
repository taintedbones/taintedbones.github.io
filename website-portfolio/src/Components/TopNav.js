import React, { Component } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopNav extends Component {
    render () {
        return (
            <div>
            <Navbar collapseOnSelect expand="md" className="Top-Nav" fixed="top" variant="dark">
            <Navbar.Brand>Kierstyn Just</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
              <div className="Nav-Buttons">
                <Nav.Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        About
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Experience
                    </Link>
                </Nav.Link>
              </div>
            </Navbar.Collapse>
          </Navbar>
          </div>
        )
    }
}

export default TopNav;