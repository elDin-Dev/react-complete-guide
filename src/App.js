import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 44 },
      { name: "Alex", age: 32 },
      { name: "Ciu", age: 49 }
    ]
  };

  switchNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button onClick={this.switchNameHandler}>Switch Namxxxe</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
          My Hobbies:Racing
      </Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;