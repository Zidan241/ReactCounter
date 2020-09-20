import React, {Component} from 'react';
class PlusButton extends Component {
    render() {
        const { counter , setCounter } = this.props;

        const incrementCounterHandler = () => {
            setCounter(counter+1);
        } 
      return (
        <button onClick={incrementCounterHandler} className="incButton">
            <i className="fas fa-plus-circle"></i>
        </button>    
      )
    }
  }
  
  export default PlusButton;