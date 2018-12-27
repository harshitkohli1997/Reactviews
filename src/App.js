import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
  persons:[
    {name:'hk',age:21},
    {name:'ak',age:22},
    {name:'bk',age:23},
    {name:'ck',age:24},
  ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>hello reactjs</h1>
         <Person name={this.state.persons[0].name} age={this.state.persons[1].age}></Person>
        </header>
        
      </div>
      
    );
  
  }
}

export default App;
