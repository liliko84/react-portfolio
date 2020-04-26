import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'


export default () => {
  return <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Lili</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
}