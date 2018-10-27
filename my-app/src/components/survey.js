import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";

class Survey extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1> Survey </h1>
        </Jumbotron>
        <Jumbotron>
          <h2> Are you from the United States? </h2>
            <ButtonToolbar>
              <Button bsSize="large" block>
                Yes
              </Button>
              <Button bsSize="large" block>No</Button>
            </ButtonToolbar>
        </Jumbotron>
      </div>
    )
  }
}
export default Survey;
