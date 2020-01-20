import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    console.log('Was clicked + togglePersonsHandler');
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }
  render() {





    let persons = null;
    let btnClass = '';
    console.log('axxxxxxx' + btnClass);

    if (this.state.showPersons === true) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                
                changed={(event) => this.nameChangehandler(event, person.id)}
              />
            </ErrorBoundary>
          })}

        </div>

      );


      btnClass = styleClasses.Red

    }


    console.log(btnClass);

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styleClasses.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(styleClasses.bold);
    }


    return (
      <div className={styleClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>

        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}

      </div>
    );
  }
}

export default App;