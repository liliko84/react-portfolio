import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Contact, Portfolio } from './pages';
import Nav from './components/Nav';
import { Container } from 'react-bootstrap';
import FooterPage from './components/FooterPage'

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
      <FooterPage />
    </Router>
  )
}
export default App
