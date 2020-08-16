import React from 'react'
import {Button, Col, Row, Form} from 'react-bootstrap'

function UserForm(props){

    return(
        <div>
        <h1>User Detail Form</h1>
        <div style={{margin:"30px"}}>
        <Col xs={{span:5, offset:3}}>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Email</Form.Label>
    </div>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>First name</Form.Label>
    </div>
    <Form.Control type="text" placeholder="First Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Last name</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Last Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Phone Number</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Phone Number" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Adddress</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Address" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>City</Form.Label>
    </div>
    <Form.Control type="text" placeholder="City" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlSelect1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Gender</Form.Label>
    </div>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Date Of Birth</Form.Label>
    </div>
    <Form.Control type="date" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Monthly Income (INR)</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Monthly Income in Rupees" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Education</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Education" />
  </Form.Group>
  <div style={{textAlign:"left"}}>
  <input type="checkbox" id="" name="marriage" value="" />
  &nbsp; &nbsp;
    <label for="marriage">Married</label>
  </div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
        </div>
        </div>
    )
}

export default UserForm