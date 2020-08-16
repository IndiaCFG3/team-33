import React from 'react'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row,Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Login(props){
    function handleClick(){
        console.log('clicked')

    }

    return(
        <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>PANAH</h1>
        <h4 style={{textAlign:"center", marginTop:"20px"}}>LOGIN</h4>
        <div style={{marginTop:"60px"}}>
        <Col xs={{span:4, offset:4}}>
        
            <Form>
            
                <Form.Group controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>
                

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
                <br/>
                <div>Yet to be a Member? <Link to='/signup'>Signup</Link> </div>
        </Col>
        </div>
=======

function Login(props){

    return(
        <div>
            Login Page
>>>>>>> backend
        </div>
    )
}

export default Login