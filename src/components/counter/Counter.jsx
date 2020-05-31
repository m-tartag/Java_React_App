import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    // Constructor

    constructor() {
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
          return (
            <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button className="myButton" onClick={this.decrement}>-1</button>
            <span className="count">{this.state.counter}</span>
        </div>
    )
}



increment() {
        this.setState({
        counter: this.state.counter + this.props.by
    });
}


decrement() {
    this.setState({
        counter: this.state.counter -1
    });
}

}


Counter.defaultProps = {
    by : 1
}






export default Counter;