import React from 'react';
import '../css/About.css';
import { Container, Row, Col } from "reactstrap";

const companylist = [
    { company: 'Medici Soft',
      job: ['Intern', 'IT Business']},
    { company: 'Prediction',
      job: ['Intern', 'Backend Developer']}
]

function InterShip(props){
    return(
        <div className="intershipdiv">
            <p className="interntitle">{props.name}</p>
            {companylist.map((intern) => (
                    intern.company === props.name &&
                    <div>{intern.job.map((role) => (
                        <p className='interntext'>{role}</p>
                    ))}</div>
                ))}
        </div>
    )
}


function About() {
    return (
        <div className='about'>
            <div className='about-text'>
                <p>ABOUT ME</p>
            </div>
            <Container>
                <Row>
                    <Col>
                    <div className='aboutblock'>
                        <p className='subtitle'>FROM</p>
                        <p className='valuetext'>JEJU/SEOUL</p>
                    </div>
                    <div className='aboutblock'>
                        <p className='subtitle'>EDUCATE</p>
                        <p className='valuetext'>EWHA WOMANS UNIVERSITY</p>
                    </div>
                    </Col>
                    <Col>
                    <p className='subtitle'>INTERNSHIP</p>
                    <InterShip name='Medici Soft'/>
                    <InterShip name='Prediction'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;