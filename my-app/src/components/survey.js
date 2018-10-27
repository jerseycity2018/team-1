import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem, MenuItem,
  SplitButton, Row, Checkbox, Col} from "react-bootstrap";

class Survey extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);

  this.state = {
    value: '',
    states: '',
    zipcode: '',
    country: '',
    group: '',
    renderStates: true,
    renderZipcode: false,
    renderCountry: false,
    renderGroup: false
  };
}

handleClick = (param) =>{
    switch(param){
	    case 1:
        return this.setState({
            renderStates: false,
            renderZipcode: true
        });
        case 2:
        return this.setState({
            renderStates: false,
            renderCountry: true
        })
        case 3:
        return this.setState({
            renderZipcode: false,
            renderGroup: true
        })
        default:
    }
}

handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({zipcode: false});
      this.setState({group: true});
    }
}

getValidationState() {
  const length = this.state.value.length;
  if (length == 10) return 'success';
  else if (length != 5) return 'warning';
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
        {this.state.renderStates ?(
            <div>
            <Jumbotron>
                <h2> Are you from the United States? </h2>
                <ButtonToolbar>
                    <Button onClick={()=>this.handleClick(1)} value="yes" bsSize="large" block>Yes</Button>
                    <Button onClick={()=>this.handleClick(2)} value="no" bsSize="large" block>No</Button>
                </ButtonToolbar>
            </Jumbotron>
            </div>
        ):<div></div>}

        {this.state.renderZipcode ?(
        <div>
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
                    placeholder="Enter Zipcode"
                    onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    </FormGroup>
                </form>
                <button onClick={()=>this.handleClick(3)}>Enter</button>
            </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderCountry ?(
        <div>
        <Jumbotron>
          <h2> What country are you from? </h2>
          <SplitButton title="Choose a Country" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Afghanistan</MenuItem>
          <MenuItem eventKey="2">Australia</MenuItem>
          <MenuItem eventKey="3">Belgium</MenuItem>
          <MenuItem eventKey="4">Brazil</MenuItem>
          <MenuItem eventKey="5">Cambodia</MenuItem>
          <MenuItem eventKey="6">Chile</MenuItem>
          <MenuItem eventKey="7">Republic of China</MenuItem>
          <MenuItem eventKey="8">Denmark</MenuItem>
          <MenuItem eventKey="9">Dominican Republic</MenuItem>
          <MenuItem eventKey="10">Egypt</MenuItem>
          <MenuItem eventKey="11">Ethiopia</MenuItem>
          <MenuItem eventKey="12">Finland</MenuItem>
          <MenuItem eventKey="13">France</MenuItem>
          <MenuItem eventKey="14">Germany</MenuItem>
          <MenuItem eventKey="15">Guatemala</MenuItem>
          <MenuItem eventKey="16">Haiti</MenuItem>
          <MenuItem eventKey="17">Hungary</MenuItem>
          <MenuItem eventKey="18">India</MenuItem>
          <MenuItem eventKey="19">Iran</MenuItem>
          <MenuItem eventKey="20">Japan</MenuItem>

          </SplitButton>
        </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderGroup ?(
        <div>
        <Jumbotron>
          <h2> Are you alone or with a group? </h2>
            <ButtonToolbar>
              <Button bsSize="large" block>Alone</Button>
              <Button bsSize="large" block>Group</Button>
            </ButtonToolbar>
        </Jumbotron>
        </div>
        ):<div></div>}

        <Jumbotron>
          <h2> How many people? (Including you) </h2>
          <form>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter number of people"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
        </form>
        </Jumbotron>

        <Jumbotron>
          <h2> Where did you go? </h2>
          <FormGroup style={{marginLeft:"300px", marginRight:"300px"}}>
          <Row className="show-grid">
              <Col md={6} mdPush={6}>
              <Checkbox>Cherry Hill</Checkbox>
              <Checkbox>Strawberry Fields (Imagine Mosaic)</Checkbox>
              <Checkbox>Bow Bridge</Checkbox>
              <Checkbox>Shakespeare Garden</Checkbox>
              <Checkbox>The Pool</Checkbox>
              <Checkbox>The Loch</Checkbox>
              <Checkbox>The Ravine</Checkbox>
              <Checkbox>The Mall (Literary Walk)</Checkbox>
              </Col>
              <Col md={6} mdPull={6}>
              <Checkbox>Balto</Checkbox>
              <Checkbox>Bethesda Terrace (Bethesda Fountain)</Checkbox>
              <Checkbox>Alice in Wonderland</Checkbox>
              <Checkbox>Conservatory Water</Checkbox>
              <Checkbox>Obelisk (Cleopatra's Needle)</Checkbox>
              <Checkbox>Reservoir</Checkbox>
              <Checkbox>Conservatory Garden</Checkbox>
              <Checkbox>The Harlem Meer</Checkbox>
              </Col>
            </Row>
            </FormGroup>
        </Jumbotron>

        <Jumbotron>
          <h2> What activities did you do? </h2>
          <FormGroup style={{marginLeft:"500px", marginRight:"500px"}}>
          <Row className="show-grid">
              <Col md={6} mdPush={6}>
              <Checkbox>Bicycle Rentals</Checkbox>
              <Checkbox>Boating</Checkbox>
              <Checkbox>Ice Skating</Checkbox>
              <Checkbox>Swimming</Checkbox>
              <Checkbox>Zoo</Checkbox>
              </Col>
              <Col md={6} mdPull={6}>
              <Checkbox>Walk dog</Checkbox>
              <Checkbox>Picnic</Checkbox>
              <Checkbox>Play sports</Checkbox>
              <Checkbox>Walk</Checkbox>
              <Checkbox>Bike</Checkbox>
              </Col>
            </Row>

            </FormGroup>
        </Jumbotron>

        <Jumbotron>
          <h2> How long did you stay for/plan to stay for? </h2>
          <ButtonToolbar>
            <Button bsSize="large" block>1 hour</Button>
            <Button bsSize="large" block>2 hours</Button>
            <Button bsSize="large" block>3 hours</Button>
            <Button bsSize="large" block>4 hours</Button>
            <Button bsSize="large" block>5+ hours</Button>
          </ButtonToolbar>
        </Jumbotron>

        <Jumbotron>
          <h2> How did you get to Central Park? </h2>
          <FormGroup style={{marginLeft:"300px", marginRight:"300px"}}>
              <Checkbox>Subway</Checkbox>
              <Checkbox>Long Island Railroad (LIRR)</Checkbox>
              <Checkbox>Walking</Checkbox>
              <Checkbox>Car</Checkbox>
              <Checkbox>Biking</Checkbox>
              <Checkbox>Other</Checkbox>
            </FormGroup>
        </Jumbotron>

        <Jumbotron>
          <h2> Age </h2>
          <ButtonToolbar>
            <Button bsSize="large" block>0-15</Button>
            <Button bsSize="large" block>15-24</Button>
            <Button bsSize="large" block>25-34</Button>
            <Button bsSize="large" block>35-44</Button>
            <Button bsSize="large" block>45-55</Button>
            <Button bsSize="large" block>55+</Button>
          </ButtonToolbar>
        </Jumbotron>

        <Jumbotron>
          <h2> Gender </h2>
          <ButtonToolbar>
            <Button bsSize="large" block>Male</Button>
            <Button bsSize="large" block>Female</Button>
            <Button bsSize="large" block>Other</Button>
          </ButtonToolbar>
        </Jumbotron>

        <Jumbotron>
          <h2> Ethnicity </h2>
          <Button bsSize="large" block>White</Button>
          <Button bsSize="large" block>Hispanic or Latino</Button>
          <Button bsSize="large" block>Black or African American</Button>
          <Button bsSize="large" block>Native American or American Indian</Button>
          <Button bsSize="large" block>Asian/Pacific Islander</Button>
          <Button bsSize="large" block>Other</Button>
        </Jumbotron>
      </div>
    )
  }
}
export default Survey;
