import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";

class Survey extends Component {
  render() {
    return (
        <div>
            <Jumbotron>
                <div class="intro-heading"><h1>Welcome to the Team!</h1></div>
                <div class="intro-lead-in"><h3>Thank you for joining</h3></div>
            </Jumbotron>
            <ul>
                THIS IS DA SURVEY
            </ul>
        </div>
    )
  }
}
export default Survey;
