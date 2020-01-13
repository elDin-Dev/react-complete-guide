import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 44 },
      { name: "Alex", age: 32 },
      { name: "Ciu", age: 49 }
    ],
    otherState: 'some other state',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DONT'T DO THHIS: this.state.persons[0].name='alejandro';
    this.setState({
      persons: [
        { name: newName, age: 44 },
        { name: "Alex", age: 32 },
        { name: "Ciu", age: 3 }
      ]
    })
  }

  nameChangehandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 18 },
        { name: event.target.value, age: 19 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {

    console.log('Was clicked + togglePersonsHandler');
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    console.log(this.state);

    let persons = null;

    if (this.state.showPersons === true) {

      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person  
            name={person.name}
            age={person.age} />
          })}

        </div>

      );

    }



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}

      </div>
    );
  }
}

export default App;