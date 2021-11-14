import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Button } from 'react-bootstrap'

import Teams from './Teams'
import Comparison from './Comparison'
import {
  NavLink
} from "react-router-dom";


const Navbars = () => {
  return (
      <>
    
        <Navbar bg="light" variant="light"
        sticky="top" expand="sm" collapseOnSelect>
        
        <Navbar.Brand>
          <img src="	https://comparisonator.com/wp-content/uploads/2021/01/comparisonator-wide-logo.png" width="317px" height="80px"  />{' '} 
        </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
        
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#comparison">Comparison</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
        </Navbar>
     
    
      </>
      
    )
}

export default Navbars
