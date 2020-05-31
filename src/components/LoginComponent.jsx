import React, { Component } from 'react';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name] :
                event.target.value
            }
        )
    }
    render() {
        return (
            <div className="loginComponent">
                Username: <input type="text" name="username"></input>
                Password: <input type="password" name="password"></input>
                <button>Submit</button>
            </div>
        )
    }
}

