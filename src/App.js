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

  changename = () =>{
    return Math.ceil(Math.random()*4);
  }

  switchNameHandler = (newname) => {
    this.setState({
      persons:[
        {name:newname,age:19},
        {name:'bkss',age:221},
        {name:'bks',age:232},
        {name:'cks',age:242},
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>hello reactjs</h1>
         <button  onClick = {this.switchNameHandler.bind(this,'dude')}>CLICK me</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} click = {this.switchNameHandler.bind(this,'hkss')}
          age={this.state.persons[2].age}
          ></Person>
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
        </header>
        
      </div>
      
    );
  
  }
}

export default App;
