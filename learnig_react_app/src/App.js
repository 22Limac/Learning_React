import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: []
  }

  render(){
    return (
    <div className="App">
    <h1>Limac</h1>
    <button>Switch Name</button>
    <Person name="Liam" age= "23"/>
    <Person name="Laura" age= "23">My Hobbies: Tik Tok</Person>
    <Person name="Drew" age= "26"/>
    </div>
    );
  }
}

export default App;
