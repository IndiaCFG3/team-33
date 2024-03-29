import React , { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function UserDetail(props){
    var [userDetail, setuserDetail] = useState({});

    return(
        <div>
            <div style={{textAlign:"center"}}>
                <h2>User Detail</h2>
                <div><Link to='/userlist'>Go Back</Link></div>
            </div>
            <br />
            <div  style={{textAlign:"center"}}>
            <h4>FirstName MiddleName LastName </h4>

            </div>
            
            <hr style={{width:"80%"}} />

            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Phone Number</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Email</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Full Address</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Gender</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Date Of Birth</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Monthly Income</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>Rs. DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            <Row>
            <Col xs={{span:4, offset:1}}>
                    <div style={{fontWeight:"bold", fontSize:"105%"}}>Education</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>DATA...</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
        </div>
    )
}

export default UserDetail