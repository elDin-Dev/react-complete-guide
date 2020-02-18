import React, { Component } from "react";
import styleClasses from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "ase2", name: "Max", age: 44 },
      { id: "455", name: "Alex", age: 32 },
      { id: "322_", name: "Ciu", age: 49 }
    ],
    otherState: "some other state",
    showPersons: false,
    showCockpit: true,
    changeCounter:0,
    authenticated:false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App.js componentDidMount] ");
  }

  componentDidUpdate() {
    console.log("[App.js componentDidUpdate] ");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js shouldComponentUpdate] ");
    return true;
  }

  /*
  componentWillMount() {
    console.log('[App.js componentWillMount] ');
  }
  */

  deletePersonHandler = personIndex => {
    //;Clone the persons firstable. If not we are modifying the original state.
    //const persons = this.state.persons.splice(); //Clone option 1
    const persons = [...this.state.persons]; //Clone option 2
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //opet1. Copy
    //const person = Object.assign({}, this.state.persons[personIndex]);
    //opt2. Copy with spread operator
    const person = {
      ...this.state.persons[personIndex]
    }; //Clone the original person. not modify directly

    person.name = event.target.value;
    const persons = [...this.state.persons]; //1. -Clone state
    persons[personIndex] = person; //2. -Update the current state

    this.setState( (prevState, props) => {
      return {
         persons: persons,
          changeCounter:prevState.changeCounter+1 
      }
     }
    );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true })
  };
  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangehandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            tittle={this.props.appTittle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}

        {persons}
      </Aux>
    );
  }

}

export default withClass(App, styleClasses.App);
