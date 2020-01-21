import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'ase2', name: "Max", age: 44 },
      { id: '455', name: "Alex", age: 32 },
      { id: '322_', name: "Ciu", age: 49 }
    ],
    otherState: 'some other state',
    showPersons: false,
  };


  deletePersonHandler = (personIndex) => {

    //;Clone the persons firstable. If not we are modifying the original state.
    //const persons = this.state.persons.splice(); //Clone option 1
    const persons = [...this.state.persons]; //Clone option 2
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  nameChangehandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //opet1. Copy
    //const person = Object.assign({}, this.state.persons[personIndex]);
    //opt2. Copy with spread operator
    const person = {
      ...this.state.persons[personIndex]
    } //Clone the original person. not modify directly


    person.name = event.target.value;
    const persons = [...this.state.persons]; //1. -Clone state
    persons[personIndex] = person;          //2. -Update the current state

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {


    let persons = null;

    if (this.state.showPersons) {

      persons = 
          <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangehandler} />;
    }

    return (
      <div className={styleClasses.App}>
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked  = {this.togglePersonsHandler} />

        {persons}

      </div>
    );
  }
}

export default App;