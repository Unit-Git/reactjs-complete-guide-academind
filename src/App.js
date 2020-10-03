import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";
//#ff304f
const ButtonToggle = styled.button`
  background-color: ${props => (!props.show ? "#fc5185" : "transparent")};
  color: ${props => (props.show ? "#fc5185" : "white")};
  font: inherit;
  border: ${props => (props.show ? "1px solid #fc5185" : "white")};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.show ? "#fc5185" : "#fc5c9c")};
    color: #f2f2f2;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons; old way
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={e => this.nameChangedHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) classes.push("red");

    if (this.state.persons.length <= 1) classes.push("bold");

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <ButtonToggle
          show={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </ButtonToggle>
        <br />
        <br />
        {persons}
      </div>
    );
  }
}

export default App;
