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
  ],

  }

  switchNameHandler = () => {
    this.setState({
      persons:[
        {name:'hks',age:19}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>hello reactjs</h1>
         <button  onClick = {this.switchNameHandler}>CLICK me</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        </header>
        
      </div>
      
    );
  
  }
}

export default App;
