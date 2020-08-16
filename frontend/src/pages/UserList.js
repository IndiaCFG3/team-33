import React , { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Form} from 'react-bootstrap'
import NavBar from './NavBar'



function UserList(props){
    var [userList, setuserList] = useState(['a','b']);

    return(
        <div>
        <NavBar />
            <div style={{textAlign:"center"}}>
                <h2>User List</h2>
            </div>
            <br />
            <Row>
                <Col xs={{span:4, offset:1}}>
                    <h5>USERS</h5>
                </Col>
                <Col xs={{span:4, offset:1}}>
                    <h5>SCHEMES</h5>
                </Col>
            </Row>
            <br />
            <hr style={{width:"80%"}} />
            {userList.map(user => {
                return(
                    <div>
                    <Row>
            <Col xs={{span:4, offset:1}}>
                    <div>Mera Naam</div>
                </Col>
                <Col xs={{span:4, offset:1}}>
                <div>Scheme, Scheme, Scheme</div>
                </Col>
            </Row>
            <hr style={{width:"60%"}} />
            </div>

                )
            })}

            
        </div>
    )
}

export default UserList