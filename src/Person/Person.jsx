import React from "react";
import styled from "styled-components";
import "./Person.css";

const Input = styled.input`
  border: 1px solid #333;
  padding: 0.5rem 0.6rem;
  border-radius: 4px;
  width: 80%;

  &:focus {
    border: 1px solid #f30d5a;
    box-shadow: 0 0 0.3rem #f30d5aa1;
    background-color: #f2f2f2;
  }
`;

const PersonStyle = styled.div`
  width: 400px;
  margin: 1rem auto;
  box-shadow: 0 2px 0.2rem rgba(0, 0, 0, 0.6);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 80% !important;
  }
`;

const person = props => {
  return (
    <PersonStyle>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* <p>{props.children}</p> */}
      <Input type="text" onChange={props.changed} value={props.name} />
    </PersonStyle>
  );
};

export default person;
