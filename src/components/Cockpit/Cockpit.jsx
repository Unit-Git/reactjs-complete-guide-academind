import React, { useEffect } from "react";
import "./Cockpit.css";

const Cockpit = props => {
  const classes = [];

  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
  });

  if (props.persons.length <= 2) classes.push("red");

  if (props.persons.length <= 1) classes.push("bold");

  return (
    <>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        className={`button-art ${props.isClicked ? "active" : ""}`}
        onClick={props.toggle}
      >
        Toggle Persons
      </button>
    </>
  );
};

export default Cockpit;
