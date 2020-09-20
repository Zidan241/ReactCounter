import React, {Component} from 'react';
class MinusButton extends Component {
    render() {
        const { counter , setCounter } = this.props;

        const decrementCounterHandler = () => {
            setCounter(counter-1);
        } 
      return (
        <button onClick={decrementCounterHandler} className="decButton">
            <i className="fas fa-minus-circle"></i>
        </button>    
      )
    }
  }
  
  export default MinusButton;