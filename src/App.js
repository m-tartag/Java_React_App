import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import LoginComponent from './components/LoginComponent'
import ButtonComponent from './components/ButtonComponent'
import LandingComponent from './components/LandingComponent'
import FunctionComponent from './components/examples/FunctionComponent'
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderComponent></HeaderComponent>
       <LoginComponent></LoginComponent>
       <ButtonComponent></ButtonComponent>
       <LandingComponent></LandingComponent>
       <FirstComponent></FirstComponent>
       <FunctionComponent></FunctionComponent>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        First Component
      </div>
    )
  }
}

export default App;





