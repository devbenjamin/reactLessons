import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Ben', age: '47'},
      {name: 'April', age: '44'},
      {name: 'Dennis', age: '78'}
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked")
    this.setState({ persons: [
      {name: newName, age: '47'},
      {name: 'April', age: '44'},
      {name: 'Dennis', age: '78'}
    ]})};

  nameChangedHandler = (e) => {
    this.setState({ persons: [
      {name: e.target.value, age: '47'},
      {name: e.target.value, age: '44'},
      {name: e.target.value, age: '78'}
    ]})};

    togglePersonsHandler = () => {
      let doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
    }

  render() 
  {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '0.5em',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!!</p>

        <button 
        style={buttonStyle}
        onClick={() => this.togglePersonsHandler()}>
        Switch Name</button>

        {/* <button onClick={this.switchNameHandler.bind(this, 'Benjamin')}>Switch Name</button> */}

        {this.state.showPersons ? <div>
          <Person 
            name={this.state.persons[0].name} 
            age ={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this)}
            changed={this.nameChangedHandler}/>
          <Person
            name={this.state.persons[1].name} 
            age ={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this)}
            changed={this.nameChangedHandler}
            >April Hobbies: TV</Person>
          <Person 
            name={this.state.persons[2].name} 
            age ={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this)}
            changed={this.nameChangedHandler}/>
        </div> : null}
      </div>
    );
  }
}

export default App;
