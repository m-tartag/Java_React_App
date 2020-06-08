import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            {/* <Link to={""} className="navbar-brand">
                <img src="" width="25" height="25" alt="brand"/> App
            </Link> */}
            <Nav className="mr-auto">
                <Link to={""} className="nav-link">Home</Link>
                <Link to={"list"} className="nav-link">My Dashboard</Link>
                <Link to={""} className="nav-link">Logout</Link>
            </Nav>
        </Navbar>
    )
}