import React, {useEffect} from 'react';
import styleClasses from './Cockpit.module.css';

const Cockpit = (props) => {



    /*useEffect(
      () => {
        console.log('[cockpit.js] useEffect');
        //HTTP request ...
        setTimeout(()=>{
            alert('Saved date to cloud!');
        }, 1000);
      },
      [props.persons]
    ); //ejecuta useEffect solo cuando prosp.persons cambia
      */
    useEffect(
      () => {
        console.log('[cockpit.js] useEffect');
        //HTTP request ...
        setTimeout(()=>{
            alert('Saved date to cloud!');
        }, 1000);
      },
      []
    ); //ejecuta useEffect solo se ejecuta la primera vez


    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styleClasses.Red
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(styleClasses.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(styleClasses.bold);
    }


    return (
        <div className={styleClasses.Cockpit}>
            <h1>Hi, I'm a React-> {props.tittles}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>

            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );

};

export default Cockpit;