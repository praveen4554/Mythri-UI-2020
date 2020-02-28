import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Persons: [
        {name: "Priya", age: 29},
        {name: "Pravu", age: 26}
      ]
    }
  }
  

  changeNameHandler = () =>{
    this.setState({
      Persons: [
        {name: "Kiran", age: 29},
        {name: "Pravu", age: 45}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> My React App </h1>
        <Person name = {this.state.Persons[0].name} age = {this.state.Persons[0].age} click = {this.changeNameHandler} />
        <Person name = {this.state.Persons[1].name} age = {this.state.Persons[1].age} click = {this.changeNameHandler} />
        <button onClick = {this.changeNameHandler}>Switch Name</button>
      </div>
    );
  }
}

