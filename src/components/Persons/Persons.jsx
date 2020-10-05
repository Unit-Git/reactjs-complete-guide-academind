import React, { Component } from "react";
import Person from "./Person/Person";

// const Persons = props => {
//   console.log("[Persons.jsx] rendering...");
//   return (
//     <>
//       {props.persons.map((person, index) => {
//         return (
//           <Person
//             key={person.id}
//             click={() => props.clicked(index)}
//             name={person.name}
//             age={person.age}
//             changed={e => props.changed(e, person.id)}
//           />
//         );
//       })}
//     </>
//   );
// };

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.jsx] getDerivedStateFromProps", props);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.jsx] shouldComponentUpdate....");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.jsx] getSnapshotBeforeUpdate....");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.jsx]  componentDidUpdate....");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.jsx] rendering...");
    return (
      <>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              changed={e => this.props.changed(e, person.id)}
            />
          );
        })}
      </>
    );
  }
}

export default Persons;
