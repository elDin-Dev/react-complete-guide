import React from 'react';
import styleClasses from './Person.module.css'

const person = (props) => {

    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }    

    console.log('-----------------' + rnd);

    return (



        <div className={styleClasses.Person} >
            <p onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person
