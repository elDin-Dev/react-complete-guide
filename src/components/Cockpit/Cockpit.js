import React, { useEffect, useRef, useContext } from "react";
import styleClasses from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context'

const Cockpit = props => {
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
  /*
    useEffect(
      () => {
        console.log('[cockpit.js] useEffect');
        //HTTP request ...
        setTimeout(()=>{
            alert('Saved date to cloud!');
        }, 1000);
      },
      []
    ); //ejecuta useEffect solo se ejecuta la primera vez.
      */
  const toggleButtonRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log(`[Cockpit.js] authenticated: `+ authContext.authenticated);

  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    //HTTP request ...
    /*setTimeout(() => {
      alert("Saved date to cloud!");
    }, 1000);*/

    toggleButtonRef.current.click();

    //Clean up
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); //

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  let assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styleClasses.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(styleClasses.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(styleClasses.bold);
  }

  return (
    <div className={styleClasses.Cockpit}>
      <h1>Hi, I'm a React-> {props.tittles}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>

      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Switch Name
      </button>
      
        {  <button onClick={authContext.login}> Log in</button> }
      
      
    </div>
  );
};

export default React.memo(Cockpit);
