import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import RustServerService from '../../api/RustServerService'



export default class ListComponent extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <div style={{"float":"left"}}>
                            <FontAwesomeIcon icon={faList}/> Server List
                        </div>
                        <div style={{"float":"right"}}></div>
                        {/* <div>{RustServerService.executeRustServerService()}</div> */}

                    </Card.Header>

                </Card>
            </div>
        )
    }
}



