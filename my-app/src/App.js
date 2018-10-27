import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Dashboard from  './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Survey />
      <Dashboard />
      </div>
    );
  }
}

export default App;
