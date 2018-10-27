import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FieldGroup, FormControl, ControlLabel, Jumbotron } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Dashboard from  './components/Dashboard';
import Survey from './components/survey';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route name="app" exact path="/" component={HomePage} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/map" component={Map} />
      </div>
      </Router>
    );
  }
}

export default App;
