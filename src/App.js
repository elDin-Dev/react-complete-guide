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
    this.setState({showPersons: !doesShow});

  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button
          style={style}
          onClick={ this.togglePersonsHandler}>Switch Name</button>




        {this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Pepe2')}
              changed={this.nameChangehandler}> Hobbies:Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />

          </div>
          :null}
      </div>
    );
  }
}

export default App;