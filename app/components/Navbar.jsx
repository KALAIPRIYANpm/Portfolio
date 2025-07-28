'use client';
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { BsMoon } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);


  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="shadow-sm py-3">
      <Container fluid className="px-3 px-md-5">
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Kalaipriyan
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvas-navbar" />

        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label" className="fw-bold fs-4">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 gap-3 text-center">
              <Nav.Link href="#home" className="fs-5" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link href="#about" className="fs-5" onClick={handleClose}>About Me</Nav.Link>
              <Nav.Link href="#services" className="fs-5" onClick={handleClose}>Skills</Nav.Link>
              <Nav.Link href="#work" className="fs-5" onClick={handleClose}>Projects</Nav.Link>
              <Nav.Link href="#contact" className="fs-5" onClick={handleClose}>Contact</Nav.Link>
            </Nav>

            <div className="d-flex justify-content-center justify-content-lg-end align-items-center gap-3 mt-4 mt-lg-0">
              <BsMoon size={24} />
              <Button
                variant="outline-dark"
                className="rounded-pill d-flex align-items-center gap-2 fs-6 px-4 py-2"
              >
                Contact <FiArrowUpRight />
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
