import React, { Component } from 'react';
import './App.css';
import './components/Counter.js';
import Counter from './components/Counter.js';
import MinusButton from './components/MinusButton.js';
import PlusButton from './components/PlusButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem('counter') === null){
      localStorage.setItem('counter', JSON.stringify(0));
      this.state = { counter: 0 };
    }
    else{
      console.log(localStorage.getItem('counter'));
      this.state ={counter: JSON.parse(localStorage.getItem('counter'))};

    }
  }
  saveToLocalStorage = (c) => {
    localStorage.setItem('counter', c);
  }
  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return this.saveToLocalStorage(this.state.counter);
    });
  };
  componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
  }
  
  setCounter = newCounter => {
    this.setState({counter: newCounter})
  }
  render(){
    const {counter} = this.state;
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter counter={counter}/>
      <PlusButton counter={counter} setCounter={this.setCounter}/>
      <MinusButton counter={counter} setCounter={this.setCounter}/>
    </div>
  );
  }
}

export default App;
