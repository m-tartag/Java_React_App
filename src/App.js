import React, { Component } from 'react'
import './App.css';
import './bootstrap.css';
import HeaderComponent from './components/HeaderComponent'
import WelcomeComponent from './components/WelcomeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
          <HeaderComponent></HeaderComponent>
          <Switch>
            <Route path="/welcome/:name" component={WelcomeComponent}/>
          </Switch>
        </>
        </Router>
      </div>
    )
  }
}


export default App;





