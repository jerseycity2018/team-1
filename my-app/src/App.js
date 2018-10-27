import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Survey from './components/survey';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Survey />
      </div>
    );
  }
}

export default App;
