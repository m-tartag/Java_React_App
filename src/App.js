import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// import HeaderComponent from './components/HeaderComponent'
import LoginComponent from './components/LoginComponent'
// import ButtonComponent from './components/ButtonComponent'
import LandingComponent from './components/LandingComponent'
// import FunctionComponent from './components/examples/FunctionComponent'
// import Counter from './components/counter/Counter'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingComponent></LandingComponent>
        <LoginComponent></LoginComponent>
      </div>
    )
  }
}





// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="learningComponents">
//        <HeaderComponent></HeaderComponent>
//        <LoginComponent></LoginComponent>
//        <ButtonComponent></ButtonComponent>
//        <LandingComponent></LandingComponent>
//        <FunctionComponent></FunctionComponent>   
//       </div>
//     )
//   }
// }

export default App;





