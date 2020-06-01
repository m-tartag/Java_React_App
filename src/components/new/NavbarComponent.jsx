import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://i.imgur.com/znQvBMi.png" width="25" height="25" alt="brand"/> Rust Servers: Just Wiped
            </Link>
            <Nav className="mr-auto">
                <Link to={"list"} className="nav-link">List</Link>
                <Link to={""} className="nav-link">Add</Link>
                <Link to={""} className="nav-link">User List</Link>
            </Nav>
        </Navbar>
    )
}