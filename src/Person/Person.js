import React, { useState } from 'react';

const Person = (props) => {
return (
    <div>
        <p>Hi, I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
)
}

export default Person
