import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Contact, Portfolio } from './pages'
import Nav from './components/Nav'
import { Container } from 'react-bootstrap'


// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrapNavbar";
// import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Container>

      {/* <Container className="p-0" fluid={true}>
          <Navbar classname="border-bottom">
            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <link classname="nav-link" to="/">Home</link>
                <link classname="nav-link" to="/">About</link>
                <link classname="nav-link" to="/">Contact</link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container> */}
    </Router>
  );
}

export default App;
