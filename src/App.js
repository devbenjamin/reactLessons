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

  // switchNameHandler = (newName) => {
  //   //console.log("was clicked")
  //   this.setState({ persons: [
  //     {name: newName, age: '47'},
  //     {name: 'April', age: '44'},
  //     {name: 'Dennis', age: '78'}
  //   ]})};

  deletePersonHandler = () => {
    // below returns an array by calling the slice() method. nothing is spliced, so the whole object's key: values are loaded into the array. without slice(), we are using persons as a pointer to the original data in state and changing that, which is not advisable: this is best practices
    // const persons = this.state.persons
    // below uses the spread operator to effect the same result as above
    const persons = [...this.state.persons]
    persons.splice(persons.index, 1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (e) => {
    this.setState({ persons: [
      {name: e.target.value, age: '47'},
      {name: e.target.value, age: '44'},
      {name: e.target.value, age: '78'}
    ]})};

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
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
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={this.nameChangedHandler}
              />
            )
          })}
           {/* <Person 
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
            changed={this.nameChangedHandler}/>  */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!!</p>

        <button 
        style={buttonStyle}
        onClick={() => this.togglePersonsHandler()}>
        Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
