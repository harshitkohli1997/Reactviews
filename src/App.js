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
  showPerson:false

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
  
  nameChangleHandler = (event) => {
    this.setState({
      persons:[
        {name:'dsfd',age:19},
        {name:event.target.value,age:221},
        {name:'bks',age:232},
        {name:'cks',age:242},
      ]
    })
  }

  toggleHandler = () => {
  
      const doesshow = this.state.showPerson;
      this.setState({showPerson:!doesshow})
     }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>hello reactjs</h1>
         <button  onClick = {this.toggleHandler}>CLICK me</button>
         {this.state.showPerson? 
         <div>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} change = {this.nameChangleHandler}
           age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} click = {this.switchNameHandler.bind(this,'hkss')}
          age={this.state.persons[2].age}
          ></Person>
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
          </div>
          : <div><h1>NO Person</h1></div>}
        </header>
        
        
      </div>
      
    );
  
  }
}

export default App;
