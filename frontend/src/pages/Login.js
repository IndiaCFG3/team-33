import React , { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row,Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Login(props){
    var [userLogin, setuserLogin] = useState({
        email:"",
        password:""
    })

    return(
        <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>PANAH</h1>
        <h4 style={{textAlign:"center", marginTop:"20px"}}>LOGIN</h4>
        <div style={{marginTop:"60px"}}>
        <Col xs={{span:4, offset:4}}>
        
            <Form>
            
                <Form.Group controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setuserLogin({...userLogin, email:e.target.value})}} />
                    
                </Form.Group>
                

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setuserLogin({...userLogin, password:e.target.value})}} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
                <br/>
                <div>Yet to be a Member? <Link to='/signup'>Signup</Link> </div>
        </Col>
        </div>
        </div>
    )
}

export default Login