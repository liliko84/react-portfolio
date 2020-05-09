import React,{Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './portfolio.css';



export default () => {
  return (
  <>
  <Jumbotron className="bg-info text-light">
           <Container className="text-center">
               <h1 className='display-3'>Portfolio</h1>
           </Container>
       </Jumbotron>
       <Container>
          <a className="blue" href="https://github.com/smeruva1/TravelNut"> <img className='password' src='./assets/img/travel.png'/></a>
          <h3>Travel Nut</h3>
          </Container>

           <Container>
          <a className="blue" href="https://github.com/Riaconianni/Bookfinder"><img className='burger' src='./assets/img/book.png'/></a>           
          <h3>Book List</h3>
          </Container>
 
          <Container>
          <a className="blue" href="https://github.com/liliko84/Note-Taker"> <img className='planner' src='./assets/img/note.png'/></a>  
          <h3>Note Taker</h3>
          </Container> 

          <Container>
          <a className="blue" href="https://github.com/liliko84/Bootstrap"> <img className='planner' src='./assets/img/bootstrap.png'/></a>  
          <h3>Portfolio</h3>
          </Container> 
          <Container>
          <a className="blue" href="https://github.com/liliko84/Fitness-Tracker"> <img className='planner' src='./assets/img/fitness.png'/></a>  
          <h3>Fitness Tracker</h3>
          </Container> 
          <Container>
          <a className="blue" href="https://github.com/liliko84/Burger"> <img className='planner' src='./assets/img/burger.png'/></a>  
          <h3>Burger App</h3>
          </Container> 
          <Container>
          <a className="blue" href="https://github.com/liliko84/User-Directory"> <img className='planner' src='./assets/img/user.png'/></a>  
          <h3>User Directory</h3>
          </Container> 
  </>
  )
  }

