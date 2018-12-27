import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>hello reactjs</h1>
         <Person name="harshit" age = "21"/>
        </header>
        
      </div>
      
    );
  
  }
}

export default App;
