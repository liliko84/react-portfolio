import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './contact.css';

function Contact() {
    return (
        <>
            <Jumbotron className="bg-dark mt-2 text-light">
                <Container className="text-center">
                    <h1 className='display-7'> My Contact Information</h1>
                </Container>
            </Jumbotron>

            <Container className="github">
                <h3>
                    Git-Hub:  
                </h3> 
               <a  className="and" href="https://github.com/">liliko84</a> 

            </Container>
            <Container className="email">
                <h3>
                    Email:
               </h3>
           
               <a  className="and" href="https://mail.yahoo.com/mail/u/0/#inbox">lilikog@yahoo.com</a> 

                </Container>
            <Container className="linkin">
                <h3>
                    Linkedin:
                </h3>
              
                <a  className="and" href="
                https://www.linkedin.com/in/lili-gugushvili-55852276?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwI0GG69UTf2p8EmRvl5h%2Bw%3D%3D">https://www.linkedin.com/in/lili-gugushvili-55852276?</a> 
            </Container>

        </>

    )
}

export default Contact;