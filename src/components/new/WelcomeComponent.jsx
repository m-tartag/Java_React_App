import React from 'react'
import {Jumbotron} from 'react-bootstrap'

export default function WelcomeComponent(props) {
    return (
        <Jumbotron className="bg-dark text-white">
            <h1>{props.heading}</h1>
        </Jumbotron>


    )
}