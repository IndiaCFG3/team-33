import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row,Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Signup(props){
    var [userSignUp, setuserSignUp] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:""
    })

    return(
        <div>

        <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>PANAH</h1>
        <h4 style={{textAlign:"center", marginTop:"20px"}}>SIGNUP</h4>
        <div style={{marginTop:"60px"}}>
        <Col xs={{span:4, offset:4}}>
        
            <Form>
            
            <Form.Group controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setuserSignUp({...userSignUp, email:e.target.value})}} />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="First Name" onChange={(e)=>{setuserSignUp({...userSignUp, firstname:e.target.value})}} />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
               
                <Form.Control type="text" placeholder="Last Name" onChange={(e)=>{setuserSignUp({...userSignUp, lastname:e.target.value})}} />
                
            </Form.Group> 
            <Form.Group controlId="formBasicPassword">
              
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setuserSignUp({...userSignUp, password:e.target.value})}} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            </Form>
            <br/>
            <div>Already a Member? <Link to='/'>Login</Link> </div>
        </Col>
        </div>
        </div>

        </div>
    )
}

export default Signup