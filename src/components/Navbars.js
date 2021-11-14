import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Button } from 'react-bootstrap'

import Teams from './Teams'
import Comparison from './Comparison'
import {
  NavLink, Link, Route, Switch
} from "react-router-dom";


const Navbars = () => {
  return (
      <>
        <Navbar bg="light" variant="light"
        sticky="top" expand="sm" collapseOnSelect className="navbar">
        
        <Navbar.Brand>
          <img src="	https://comparisonator.com/wp-content/uploads/2021/01/comparisonator-wide-logo.png" width="317px" height="80px"  />{' '} 
        </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
        
        <Navbar.Collapse>
          <Nav >
            <Link to="/teams" className="page">Teams ⚽</Link>
            <Link to="/comparison" className="page">Comparison 📊</Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
        <Switch>
          <Route path="/teams" component={Teams} />
          <Route path="/comparison" component={Comparison} />
        </Switch>
      </>
      
    )
}

export default Navbars;
