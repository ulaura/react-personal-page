import React from 'react';
import ContactForm from './ContactForm';
import { Grid, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Row>
      <Col lg={6}>
        <h3>Contact Information</h3>

        <h4>LinkedIn:</h4>
        <a href="https://www.linkedin.com/in/laura-unaeze/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/laura-unaeze/</a>
        
        <h4>GitHub:</h4>
        <a href="https://github.com/ulaura" target="_blank" rel="noopener noreferrer">https://github.com/ulaura</a>

        <h4>Email:</h4>
        <a href="mailto:l.unaeze5@gmail.com" rel="noopener noreferrer">l.unaeze5@gmail.com</a>

        <h4>Last Name Pronunciation:</h4>
        <p>"you-NAY-zee"</p>
      </Col>

      <Col lg={6}>
        <ContactForm />
      </Col>
    </Row>
  );
};

export default Contact;