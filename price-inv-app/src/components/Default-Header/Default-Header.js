import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { TiHome, TiGroup, TiSupport, TiShoppingCart } from 'react-icons/ti';
import './Default-Header.css'

class DefaultHeader extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand className="navbar-link" href="#home">Price Inventory Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-link" >
                <Nav.Link className="navbar-link" style={{marginLeft:'30vw'}} href="#home"><TiHome icon="TiHome" style={{marginRight:'1vw'}} />Home</Nav.Link>
                <Nav.Link className="navbar-link" style={{marginLeft:'5vw'}} href=""><TiGroup icon="TiGroup" style={{marginRight:'1vw'}} />Group</Nav.Link>
                <Nav.Link className="navbar-link" style={{marginLeft:'5vw'}} href=""><TiSupport icon="TiSupport" style={{marginRight:'1vw'}} />Support</Nav.Link>
                <Nav.Link className="navbar-link" style={{marginLeft:'5vw'}} href=""><TiShoppingCart icon="TiShoppingCart" style={{marginRight:'1vw'}} />Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}

export default DefaultHeader;
