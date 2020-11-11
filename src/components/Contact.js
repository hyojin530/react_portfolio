import React, { useState } from "react";
import "../css/Contact.css";
import { Container, Row, Col } from "reactstrap";

const contactlist = ['dkakfl56@gmail.com', 'hyojin530', '@hyojinm.530']

function Contact() {
  const [cont, setCont] = useState(0);

  const onClick = (e) => {
    const index = e.target.value;
    setCont(index);
  }

  return (
    <div className="contact">
      <div>
        <p className="contact-text">CONTACT</p>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <button className="gmail-button" value={0} onClick={onClick}>
            </button>
            <button className="github-button" value={1} onClick={onClick}>
            </button>
            <button className="instagram-button" value={2} onClick={onClick}>
            </button>
            <p class="content">{contactlist[cont]}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

