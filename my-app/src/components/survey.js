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
    people: '',
    renderStates: true,
    renderZipcode: false,
    renderCountry: false,
    renderGroup: false
  };
}

getSelected = (e,state) =>{
    this.setState({state: e});
}

handleClick = (Case, state, e) =>{
    this.handleCase(Case);
    this.getSelected(e, state);
}

handleCase = (param) => {
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
            <h1> Survey </h1>
        {this.state.renderStates ?(
            <div>
            <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                <h2 style={{color:"white"}}> Are you from the United States? </h2>
                <div style={{width:"50%", marginLeft:"300px"}}>
                    <Button onClick={()=>this.handleClick(1)} value="yes" bsSize="large" block>Yes</Button>
                    <Button onClick={()=>this.handleClick(2)} value="no" bsSize="large" block>No</Button>
                </div>
            </Jumbotron>
            </div>
        ):<div></div>}

        {this.state.renderZipcode ?(
        <div>
            <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                <h2 style={{color:"white"}}> What is your Zip Code? </h2>
                <div style={{width:"50%", marginLeft:"300px"}}>
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
                </div>
            </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderCountry ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> What country are you from? </h2>
          <SplitButton title="Choose a Country" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="Afghanistan">Afghanistan</MenuItem>
          <MenuItem eventKey="Australia">Australia</MenuItem>
          <MenuItem eventKey="Belgium">Belgium</MenuItem>
          <MenuItem eventKey="Brazil">Brazil</MenuItem>
          <MenuItem eventKey="Cambodia">Cambodia</MenuItem>
          <MenuItem eventKey="Chile">Chile</MenuItem>
          <MenuItem eventKey="Republic of China">Republic of China</MenuItem>
          <MenuItem eventKey="Denmark">Denmark</MenuItem>
          <MenuItem eventKey="Dominican Republic">Dominican Republic</MenuItem>
          <MenuItem eventKey="Egypt">Egypt</MenuItem>
          <MenuItem eventKey="Ethiopia">Ethiopia</MenuItem>
          <MenuItem eventKey="Finland<">Finland</MenuItem>
          <MenuItem eventKey="France">France</MenuItem>
          <MenuItem eventKey="Germany">Germany</MenuItem>
          <MenuItem eventKey="Guatemala">Guatemala</MenuItem>
          <MenuItem eventKey="Haiti">Haiti</MenuItem>
          <MenuItem eventKey="Hungary">Hungary</MenuItem>
          <MenuItem eventKey="India">India</MenuItem>
          <MenuItem eventKey="Iran">Iran</MenuItem>
          <MenuItem eventKey="Japan">Japan</MenuItem>

          </SplitButton>
        </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderGroup ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> Are you alone or with a group? </h2>
            <div style={{width:"50%", marginLeft:"300px"}}>
              <Button bsSize="large" block>Alone</Button>
              <Button bsSize="large" block>Group</Button>
            </div>
        </Jumbotron>
        </div>
        ):<div></div>}


        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> How many people? (Including you) </h2>
          <div style={{width:"50%", marginLeft:"300px"}}>
          <form>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter number of people"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
        </form>
        </div>
        </Jumbotron>

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> What places did you visit? </h2>
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

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> What activities did you do? </h2>
          <FormGroup style={{marginLeft:"400px", marginRight:"400px"}}>
          <Row className="show-grid">
              <Col md={6} mdPush={6}>
              <Checkbox> <h4 style={{display:"inline-block"}}>Bicycle Rentals</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Boating</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Ice Skating</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Swimming</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Zoo</h4></Checkbox>
              </Col>
              <Col md={6} mdPull={6}>
              <Checkbox> <h4 style={{display:"inline-block"}}>Walk dog(s)</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Picnic</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Play sports</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Walk</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Bike</h4></Checkbox>
              </Col>
            </Row>

            </FormGroup>
        </Jumbotron>

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> How long did you stay for/plan to stay for? </h2>
          <div style={{width:"50%", marginLeft:"300px"}}>
            <Button bsSize="large" block>1 hour</Button>
            <Button bsSize="large" block>2 hours</Button>
            <Button bsSize="large" block>3 hours</Button>
            <Button bsSize="large" block>4 hours</Button>
            <Button bsSize="large" block>5+ hours</Button>
          </div>
        </Jumbotron>

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> How did you get to Central Park? </h2>
          <FormGroup style={{marginLeft:"300px", marginRight:"300px"}}>
              <Checkbox> <h4 style={{display:"inline-block"}}>Subway</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Long Island Railroad (LIRR)</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Walking</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Car</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Biking</h4></Checkbox>
              <Checkbox> <h4 style={{display:"inline-block"}}>Other</h4></Checkbox>
            </FormGroup>
        </Jumbotron>

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> Age </h2>
          <div style={{width:"50%", marginLeft:"300px"}}>
            <Button bsSize="large" block>0-15</Button>
            <Button bsSize="large" block>15-24</Button>
            <Button bsSize="large" block>25-34</Button>
            <Button bsSize="large" block>35-44</Button>
            <Button bsSize="large" block>45-55</Button>
            <Button bsSize="large" block>55+</Button>
          </div>
        </Jumbotron>

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> Gender </h2>
          <div style={{width:"50%", marginLeft:"300px"}}>
            <Button bsSize="large" block>Male</Button>
            <Button bsSize="large" block>Female</Button>
            <Button bsSize="large" block>Other</Button>
            <Button bsSize="large" block>Prefer to not disclose</Button>
          </div>
        </Jumbotron>

        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> Ethnicity </h2>
          <div style={{width:"50%", marginLeft:"300px"}}>
          <Button bsSize="large" block>White</Button>
          <Button bsSize="large" block>Hispanic or Latino</Button>
          <Button bsSize="large" block>Black or African American</Button>
          <Button bsSize="large" block>Native American or American Indian</Button>
          <Button bsSize="large" block>Asian/Pacific Islander</Button>
          <Button bsSize="large" block>Other</Button>
          <Button bsSize="large" block>Prefer to not disclose</Button>
          </div>
        </Jumbotron>
      </div>
    )
  }
}
export default Survey;
