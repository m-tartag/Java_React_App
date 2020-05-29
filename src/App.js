import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
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

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>This is the header</h1>
      </div>
    )
  }
}
export default App;



