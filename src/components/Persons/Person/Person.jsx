import React, { Component, Fragment, createRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Person.css";
import AuthContext from "../../../context/auth-context";

const PersonStyle = styled.div`
  position: relative;
  width: 400px;
  margin: 1rem auto;
  box-shadow: 0 2px 0.2rem rgba(0, 0, 0, 0.6);
  padding: 1.3rem 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 80% !important;
  }
`;

const Input = styled.input`
  border: 1px solid #343434;
  padding: 0.5rem 0.6rem;
  border-radius: 4px;
  width: auto;
  display: inline-block;
  outline: none;
  color: #333;
  &:focus {
    color: #f30d5a;
    border: 1px solid #f30d5a;
    box-shadow: 0 0 0.3rem #f30d5aa1;
    background-color: #f2f2f2;
  }
`;

const Remove = styled.button`
  text-decoration: none;
  background-color: #f30d5a;
  padding: 0.2rem 0.75rem;
  border-radius: 3px;
  color: #f2f2f2;
  cursor: pointer;
  outline: none;
  border: none;
  margin-left: auto;

  &:hover {
    background-color: #f30d5ad3;
  }
  &:focus {
    box-shadow: 0 0 0.2rem #f30d5a;
  }
`;

// const Person = props => {
//   console.log("[Person.jsx] rendering...");
//   return (
//     <PersonStyle>
//       <Remove onClick={props.click}>X</Remove>
//       <p>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       {/* <p>{props.children}</p> */}
//       <Input type="text" onChange={props.changed} value={props.name} />
//     </PersonStyle>
//   );
// };

const personPropsTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  isAuth: PropTypes.bool,
};

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <Fragment>
        <AuthContext.Consumer>
          {context => {
            context.authenticated ? <p>Authenticated </p> : <p>Please Login</p>;
          }}
        </AuthContext.Consumer>
        <PersonStyle>
          <Remove onClick={this.props.click}>X</Remove>
          <p>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          {/* <p>{props.children}</p> */}
          <Input
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </PersonStyle>
      </Fragment>
    );
  }
}

Person.propTypes = personPropsTypes;

export default Person;
