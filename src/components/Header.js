import React from "react";
import '../css/Header.css';
import '../App.css';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
  Row,
  Col
} from "reactstrap";

function Header() {
  return (
    <div id="menu">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Navbar light expand="md" className="nav" fixed="top">
              <Collapse navbar className="navbar-collapse">
                <Nav navbar className="navbar-ul">
                  <NavItem className="navItem">
                    <NavLink href="#aboutme">ABOUT ME</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#dev-stacks">STACK</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>

              <Col xs={{ size: 1 }} sm={{ size: 1}} md={{ size: 1, offset : 1 }}>
                <NavbarBrand href="">
                  <span className="mainTitle">PORTFOLIO</span>
                </NavbarBrand>
              </Col>
              <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
              </Col>
              <Collapse navbar className="navbar-collapse">
                <Nav navbar className="navbar-ul">
                  <NavItem className="navItem">
                    <NavLink href="#projects">PROJECTS</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#contact">CONTACT</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>



            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;