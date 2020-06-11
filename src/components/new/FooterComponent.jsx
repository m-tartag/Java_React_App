import React, { Component } from 'react'
import {Navbar, Container, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';

export default class FooterComponent extends Component {
    render() {
        
        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div className="text-white">
                            {fullYear}-{fullYear + 1}, All Rights Reserved
                        </div>
                    </Col>
                </Container>

            </Navbar>
        )
    }
}

