import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

import './App.css'
import './bootstrap.css'

import NavbarComponent from './components/new/NavbarComponent'
import WelcomeComponent from './components/new/WelcomeComponent'
import FooterComponent from './components/new/FooterComponent'
import ListComponent from './components/new/ListComponent'
 
export default function App() {

    const heading = "Welcome to the App"
  
    return (
      <div className="App">
        <Router>
        <NavbarComponent/>
        <Container>
          <Row>
            <Col lg={12} className="main-body">
              <Switch>
                <Route path="/" exact component={() => <WelcomeComponent heading={heading}/>}/>
                <Route path="/list" exact component={ListComponent}/>
                <Route path="/user-list" exact component={""}/>
                <Route path="/add" exact component={""}/>
              </Switch>
            </Col>
          </Row>
        </Container>
        <FooterComponent/>
        </Router>
      </div>
    )
  }



