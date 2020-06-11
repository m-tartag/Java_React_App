import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';




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
                        Income
                        </div>
                        <div style={{"float":"right"}}></div>
                        Expense
                    </Card.Header>

                </Card>
            </div> 
        )
    }
}



