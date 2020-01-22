import React from 'react';
import styleClasses from './Cockpit.module.css';

const cockpit = (props) => {

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

    console.log('kkkkkkkkkk ' + btnClass);

    return (
        <div className={styleClasses.Cockpit}>
            <h1>Hi, I'm a React-> {props.tittle}}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>

            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );

};

export default cockpit;