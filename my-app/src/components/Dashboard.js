import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import SimpleMap from './Map';

class Dashboard extends Component {
  render() {
    return (
      <div>
      <div>
        <header>
            Central Park Statistics
        </header>
        </div>
        <SimpleMap />
      </div>
    );
  }
}

export default Dashboard;
