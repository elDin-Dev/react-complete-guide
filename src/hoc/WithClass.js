import React from 'React';

const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;