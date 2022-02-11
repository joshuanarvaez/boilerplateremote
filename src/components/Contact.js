import React from 'react'
import {Form, Button} from 'react-bootstrap'


export const Contact = () => {
    return (
        <div>
            <h4>Questions? Please fill out the form below and we'll get back to you as soon as we can.</h4>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Please enter your email address</Form.Label>
    <Form.Control type="email" placeholder="email@example.com" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Please enter your name</Form.Label>
    <Form.Control type="password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicMessage">
    <Form.Label>Please enter your message below</Form.Label>
    <Form.Control type="password" placeholder="your message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}