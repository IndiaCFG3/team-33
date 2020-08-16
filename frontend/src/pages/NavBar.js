import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, Tabs, Tab} from 'react-bootstrap'

function NavBar(props){

    return(
        <div>
            
    <Nav style={{backgroundColor:"#02031c"}} className="justify-content-end">
    <Nav.Item>
      <Nav.Link style={{color:"#c7c7c7"}} href="/userform">Add User</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"#c7c7c7"}} href="/userlist">List</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"#c7c7c7"}} href="/userpending">Status</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"#c7c7c7"}} href="/">Logout</Nav.Link>
    </Nav.Item>
  </Nav>
    
  
        </div>
    )
}

export default NavBar