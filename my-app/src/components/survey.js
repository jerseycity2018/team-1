import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem, MenuItem, SplitButton
 } from "react-bootstrap";

class Survey extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);

  this.state = {
    value: ''
  };
}

getValidationState() {
  const length = this.state.value.length;
  if (length > 10) return 'success';
  else if (length > 5) return 'warning';
  else if (length > 0) return 'error';
  return null;
}

handleChange(e) {
  this.setState({ value: e.target.value });
}

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

        <Jumbotron>
          <h2> What is your Zip Code? </h2>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
        </Jumbotron>

        <Jumbotron>
          <h2> What country are you from? </h2>
            <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
        </Jumbotron>
      </div>
    )
  }
}
export default Survey;
