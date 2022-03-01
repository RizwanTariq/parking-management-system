import React from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        fixed="top"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand>
            <span>Parking Tracker</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-1 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <div className="form-check form-switch">
                <label
                  className="form-check-label text-white"
                  htmlFor="flexSwitch"
                >
                  Auto Search Mode
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitch"
                />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
