import React , { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Form} from 'react-bootstrap'
import NavBar from './NavBar'

function UserForm(props){
    var [userDetail, setuserDetail] = useState({
        email:"",
        firstname:"",
        middlename:"",
        lastname:"",
        phonenumber:"",
        address1:"",
        address2:"",
        city:"",
        state:"",
        gender:"",
        dob:"",
        monthlyincome:"",
        education:"",
        marriage:false


    });

    return(
        <div>
        <NavBar />
        <h1>User Detail Form</h1>
        <div style={{margin:"30px"}}>
        <Col xs={{span:5, offset:3}}>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Email</Form.Label>
    </div>
    <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setuserDetail({...userDetail, email:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>First name</Form.Label>
    </div>
    <Form.Control type="text" placeholder="First Name" onChange={(e)=>{setuserDetail({...userDetail, firstname:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Middle name</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Middle Name" onChange={(e)=>{setuserDetail({...userDetail, middlename:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Last name</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Last Name" onChange={(e)=>{setuserDetail({...userDetail, lastname:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Phone Number</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Phone Number" onChange={(e)=>{setuserDetail({...userDetail, phonenumber:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Address 1</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Address 1" onChange={(e)=>{setuserDetail({...userDetail, address1:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Address 2</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Address 2" onChange={(e)=>{setuserDetail({...userDetail, address2:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>City</Form.Label>
    </div>
    <Form.Control type="text" placeholder="City" onChange={(e)=>{setuserDetail({...userDetail, city:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>State</Form.Label>
    </div>
    <Form.Control type="text" placeholder="State" onChange={(e)=>{setuserDetail({...userDetail, state:e.target.value})}} />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlSelect1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Gender</Form.Label>
    </div>
    <Form.Control as="select" onChange={(e)=>{setuserDetail({...userDetail, gender:e.target.value})}}>
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Date Of Birth</Form.Label>
    </div>
    <Form.Control type="date" onChange={(e)=>{setuserDetail({...userDetail, dob:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Monthly Income (INR)</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Monthly Income in Rupees" onChange={(e)=>{setuserDetail({...userDetail, monthlyincome:e.target.value})}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <div style={{textAlign:"left"}}>
    <Form.Label>Education</Form.Label>
    </div>
    <Form.Control type="text" placeholder="Education" onChange={(e)=>{setuserDetail({...userDetail, education:e.target.value})}} />
  </Form.Group>
  <div style={{textAlign:"left"}}>
  <input type="checkbox" id="" name="marriage" value="" onChange={(e)=>{setuserDetail({...userDetail, marriage:e.target.value})}} />
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