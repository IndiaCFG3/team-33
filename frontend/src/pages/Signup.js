import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row,Form, Button } from 'react-bootstrap';

function Signup(props){

    return(
        <div>
        <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>PANAH</h1>
        <h4 style={{textAlign:"center", marginTop:"20px"}}>SIGNUP</h4>
        <div style={{marginTop:"60px"}}>
        <Col xs={{span:4, offset:4}}>
        
            <Form>
            
            <Form.Group controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="First Name" />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
               
                <Form.Control type="text" placeholder="Last Name" />
                
            </Form.Group> 
            <Form.Group controlId="formBasicPassword">
              
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            </Form>
        </Col>
        </div>
        </div>
        </div>
    )
}

export default Signup