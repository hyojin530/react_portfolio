import React from 'react';
import '../css/About.css';
import { Container, Row, Col } from "reactstrap";

function About() {
    return (
        <div className='about'>
            <div className='about-text'>
                <p>ABOUT ME</p>
            </div>
            <Container>
                <Row>
                    <Col>
                    <p>educate</p>
                    <p>EWHA WOMANS UNIVERSITY</p>
                    </Col>
                    <Col>
                    <p>intern</p>
                    <p>Medici Soft</p>
                    <p>Prediction</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;