import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {

  const [ personsState , setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 44 },
      { name: "Alex", age: 32 },
      { name: "Ciu", age: 49 }
    ]
  }
  );

  const switchNameHandler = () => {
    console.log('Was clicked');
    //this.state.persons[0].name='alejandro';
    setPersonsState({
      persons: [
        { name: "Maximiliam", age: 44 },
        { name: "Alex", age: 32 },
        { name: "Ciu", age: 3 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>

      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
        My Hobbies:Racing
      </Person>

      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );

}

export default App;



