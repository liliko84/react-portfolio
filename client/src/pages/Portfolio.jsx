import React,{Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './portfolio.css';

// import password from './assets/img/password.png';
// import burger from './assets/img/burger.png';
// import planner from '././assets/img/planner.png';
/* import fitness from './assets/img/fitness.png';
import note from './assets/img/note.png';
import password from './assets/img/password.png';
import travel from './assets/img/travel.png';
import directory from './assets/img/directory.png';
import weather from './assets/img/weather.png' */;


export default () => {
  return (
  <>
  <Jumbotron className="bg-info text-light">
           <Container className="text-center">
               <h1 className='display-3'>Portfolio</h1>
           </Container>
       </Jumbotron>
       <Container>
          <a className="blue" href=" "> <img className='password' src='./assets/img/password.png'/></a>
          <h2>Password Generator</h2>
          </Container>

          {/* <Container>
          <a className="blue" href=""><img className='burger' src='./assets/img/burger.png'/></a>           
          <h2>Burger App</h2>
          </Container>
 */}
         {/*  <Container>
          <a className="blue" href=""> <img className='planner' src='./assets/img/planner.png'/></a>  
          <h2>Day Planner</h2>
          </Container> */}

          
  </>
  )
  }

