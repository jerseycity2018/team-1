import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem, MenuItem, SplitButton
 } from "react-bootstrap";

class Survey extends Component {
state = {
    next: false,
}

click = (param) =>{
    switch(param){
        case 1:
        return this.setState({
            next: true
        });
        default:
    }
}

getValidationState() {
  const length = this.state.value.length;
  if (length > 10) return 'success';
  else if (length > 5) return 'warning';
  else if (length > 0) return 'error';
  return null;
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

        <Jumbotron>
          <h2> Are you alone or with a group? </h2>
            <ButtonToolbar>
              <Button bsSize="large" block>
                Alone
              </Button>
              <Button bsSize="large" block>Group</Button>
            </ButtonToolbar>
        </Jumbotron>

        <Jumbotron>
          <h2> How many people? (Including you) </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> Where did you go? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> What activities did you do? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> How long did you stay for/plan to stay for? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> How did you get to Central Park? </h2>
          <ButtonToolbar>
            <Button bsSize="large" block>
              Yes
            </Button>
            <Button bsSize="large" block>No</Button>
          </ButtonToolbar>
        </Jumbotron>

        <Jumbotron>
          <h2> Age? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> Gender? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> Ethnicity? </h2>
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
