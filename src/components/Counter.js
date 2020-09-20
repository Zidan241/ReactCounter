import React, {Component} from 'react';
class Counter extends Component {
    render() {
    const { counter } = this.props;
      return (
              <h1 className="counter">{counter}</h1>
       
      )
    }
  }
  
  export default Counter;