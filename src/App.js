import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name="Alex" age="44"/>

      <Person name="Vicente" age="37">
        My Hobbies:Racing
      </Person>

      <Person name="Mon" age="45"/>
    </div>
  );
}

export default App;
