import React from 'react';
import styleClasses from './Person.module.css'

const person = (props) => {

    return (



        <div className={styleClasses.Person} >
            <p onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person