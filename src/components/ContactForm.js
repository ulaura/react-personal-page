// This will be rendered in Contact.js
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
class ContactForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsNameInput">
          <ControlLabel>Your Name</ControlLabel>
          <FormControl componentClass="input" type="text" placeholder="FirstName  LastName" />
        </FormGroup>
        <FormGroup controlId="formControlsEmail">
          <ControlLabel>Your Email</ControlLabel>
          <FormControl componentClass="input" type="email" placeholder="anyperson@somewebsite.com" />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Message</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Type your message here" />
        </FormGroup>
      </form>
    );
  };

};

export default ContactForm;