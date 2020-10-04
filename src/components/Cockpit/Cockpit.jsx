import React from "react";
import "./Cockpit.css";

const Cockpit = props => {
  const classes = [];

  if (props.persons.length <= 2) classes.push("red");

  if (props.persons.length <= 1) classes.push("bold");

  return (
    <>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className="button" onClick={props.toggle}>
        Toggle Persons
      </button>
    </>
  );
};

export default Cockpit;
