import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp/SignUp';
import Person from './Person/Person';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Persons: [
        {name: "Priya", age: 29},
        {name: "Pravu", age: 26}
      ],
      Customers: [
        {fname: '',lname: '' }
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

  showNameHandler = (event) => {
    this.setState({
      Persons: [
        {name: "Priya", age: 29},
        {name: event.target.value, age: 50}
      ]
    })
  }

  submitInfoHandler = (event) =>{
    this.setState({
      Customers: [
        {fname: event.target.value,lname:event.target.value }
          
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> My React App </h1>
        <Person change = {this.showNameHandler} name = {this.state.Persons[0].name} age = {this.state.Persons[0].age} />
        <Person name = {this.state.Persons[1].name} age = {this.state.Persons[1].age} change = {this.showNameHandler} />
        
        <button onClick = {this.changeNameHandler}>Switch Name</button>
        <SignUp change = {this.submitInfoHandler}/>
       
   
      </div>
    );
  }
}

