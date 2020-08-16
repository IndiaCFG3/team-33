import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Form, Table, thead, tbody} from 'react-bootstrap'
import NavBar from './NavBar'

function UserPending(props){

    return(
        <div>
        <NavBar />
            <div style={{textAlign:"center"}}>
            <h1>Schemes Progress</h1>
            </div>
            <br />
            <Row>
                <Col xs={{span:6, offset:0}}>
                    <h3>COMPLETED</h3>
                </Col>
                <Col xs={{span:6}}>
                    <h3>PENDING</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Table  bordered hover style={{marginLeft:"2%"}}>
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Scheme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    <td>Mark</td>
                    <td>Otto</td>
                    
                    </tr>
                    <tr>
                    
                    <td>Jacob</td>
                    <td>Thornton</td>
                    
                    </tr>
                    
                </tbody>
                </Table>
                </Col>
                <Col xs={6}>
                <Table  bordered hover style={{marginRight:"2%"}}>
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Scheme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    <td>Mark</td>
                    <td>Otto</td>
                    
                    </tr>
                    <tr>
                    
                    <td>Jacob</td>
                    <td>Thornton</td>
                    
                    </tr>
                    
                </tbody>
                </Table>
                </Col>
            </Row>
        </div>
    )
}

export default UserPending