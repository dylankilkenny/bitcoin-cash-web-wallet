import React from "react";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

export default function WalletNavbar() {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Bitcoin Cash Wallet</a>
        </Navbar.Brand>
      </Navbar.Header>
      {/* <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
      </Nav> */}
    </Navbar>
  );
}
