import React, { Component, Fragment } from "react";
import styleClasses from "./Person.module.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import PropTypes, { func } from "prop-types";
import AuthContext from '../../../context/auth-context'
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    console.log("[Person.js] componentDidMount..." + this.inputElementRef);
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendereing...ññ");

    return (
      <Aux>
        <AuthContext.Consumer>
    { (context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in! </p>}
        </AuthContext.Consumer>
        
        <p onClick={this.props.click}>
          Hi, I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl)=> {this.inputElement=inputEl }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, styleClasses.Person);
