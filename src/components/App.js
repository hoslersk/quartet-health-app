import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import Questionnaire from './questionnaire'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Patient Health Questionnaire (PHQ-9)</h2>
          <Questionnaire/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
