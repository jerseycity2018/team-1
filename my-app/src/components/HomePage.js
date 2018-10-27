import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
        <div>
            <Jumbotron>
                <div class="intro-heading"><h1>Welcome to the Team!</h1></div>
                <div class="intro-lead-in"><h3>Thank you for joining</h3></div>
            </Jumbotron>
            <ul>
                <li><h4>This site is meant to help you manage your PIN Project. If you have formed a team and been approved, register your team and get cracking!</h4></li>
                <li><h4>Want to know more? Check out our program packet <a href='https://docs.google.com/document/d/1tJVbdjhijTm4VF9-ub7bVDBm8r84s-AGqw4Py76LUms/edit?usp=sharing'>HERE</a></h4></li>
                <li><h4>As a nonprofit, we are funded by the support of our stakeholders. Feel free to <a href='https://www.gofundme.com/project-innovate-newark'>DONATE</a></h4></li>
                <li><h4>Check out our website and get all of your PINformation by clicking the button below!</h4></li>
            </ul>
        </div>
    )
  }
}
export default HomePage;
