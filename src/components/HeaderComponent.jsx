import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-success">
                    <div className="navbar-brand">MyApp</div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/">Finances</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/">Login</Link></li>
                        <li><Link className="nav-link" to="/">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent