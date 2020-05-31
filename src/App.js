import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import LoginComponent from './components/LoginComponent'
import ButtonComponent from './components/ButtonComponent'
import LandingComponent from './components/LandingComponent'
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderComponent></HeaderComponent>
       <LoginComponent></LoginComponent>
       <ButtonComponent></ButtonComponent>
       <LandingComponent></LandingComponent>
       <NextComponent></NextComponent>
       <FirstComponent></FirstComponent>
       <SecondComponent></SecondComponent>
       <AnotherComponent></AnotherComponent>
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

class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        <FirstComponent></FirstComponent>
        <FirstComponent></FirstComponent>
        <FirstComponent></FirstComponent>
        <FirstComponent></FirstComponent>
      </div>
    )
  }
}

class AnotherComponent extends Component {
  render() {
    return (
      <div className="anotherComponent">
        This is another component!
      </div>
    )
  }
}

export default App;

class NextComponent extends LandingComponent {
  render() {
    return (
      <div className="nextComponent">
        Hey
      </div>
    )
  }
}



