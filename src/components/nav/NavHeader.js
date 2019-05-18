import React, { Component } from "react"
import { Navbar } from "react-bootstrap";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import '../../components/nav/NavHeader.css';

class NavHeader extends Component {
  render() {
    return (
      <div className="navHeader">
            <Nav defaultActiveKey="/home">
              <Nav.Item as="li">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link eventKey="link-1">About Us</Nav.Link>
                <Nav.Link eventKey="link-2">Photos</Nav.Link>
              </Nav.Item>
            </Nav>;
          </div>
    );
  }

}
export default NavHeader;