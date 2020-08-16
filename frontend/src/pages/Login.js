import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row,Form, Button } from 'react-bootstrap';

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
        </Col>
        </div>
        </div>
    )
}

export default Login