import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import "./Cockpit.css";

const cockpitPropsTypes = {
  isClicked: PropTypes.func,
  title: PropTypes.string,
  toggle: PropTypes.func,
  personLength: PropTypes.number,
  login: PropTypes.func,
};

const Cockpit = props => {
  const classes = [];

  const { personsLength } = props;

  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");

    const timers = setTimeout(() => {
      console.log("Fetching has successfull");
    }, 1000);

    return () => {
      console.log("[Cockpit,jsx] Cleanup work in useEffet() ");
      clearTimeout(timers);
    };
  }, []);

  if (personsLength <= 2) classes.push("red");

  if (personsLength <= 1) classes.push("bold");

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
      <br />
      <br />
      <button className={`button-art`} onClick={props.login}>
        {" "}
        Log In
      </button>
    </>
  );
};

Cockpit.propTypes = cockpitPropsTypes;

export default memo(Cockpit);
