import React, {Component, Fragment} from 'react';
import styleClasses from './Person.module.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
class Person extends Component {



    render() {
    
        console.log('[Person.js] rendereing...');
        
        return (

                <Aux>
                    <p onClick={this.props.click}>Hi, I'm {this.props.name} and I am {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}></input>

                </Aux>

        )
    
        
    }
}

export default withClass(Person, styleClasses.Person)
