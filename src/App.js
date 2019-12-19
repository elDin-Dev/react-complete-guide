import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button>Switch Name</button>
        <Person name="Alex" age="44" />
        <Person name="Vicente" age="37">
          My Hobbies:Racing
      </Person>

        <Person name="Mon" age="45" />
      </div>
    );
  }
}

export default App;