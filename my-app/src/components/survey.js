import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, ToggleButton, ToggleButtonGroup, Jumbotron, MenuItem,
  SplitButton, Row, Col, ControlLabel} from "react-bootstrap";

class Survey extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);
  this.setState = this.setState.bind(this);

  this.state = {
    value: '',
    states: '',
    zipcode: '',
    country: '',
    group: '',
    people: '',
    places: [],
    activities: [],
    stay: '',
    travel: [],
    age: '',
    gender: '',
    ethnicity: '',
    comments: '',
    renderTitle: true,
    renderStates: true,
    renderZipcode: false,
    renderCountry: false,
    renderGroup: false,
    renderPeople: false,
    renderPlaces: false,
    renderActivities: false,
    renderStay: false,
    renderTravel: false,
    renderAge: false,
    renderGender: false,
    renderEthnicity: false,
    renderComments: false,
    renderEnd: false
  };
}

handleClick = (Case, state, e) =>{
    this.handleCase(Case);
    this.getSelected(e, state);

}

getSelected = (e,state) =>{
    const newState ={};
    newState[state] = e;
    this.setState(newState);
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
            renderCountry: true,
        })
        case 3:
        return this.setState({
            renderZipcode: false,
            renderGroup: true,
        })
        case 4:
        return this.setState({
            renderCountry: false,
            renderGroup: true,
            value:''
        })
        case 5:
        return this.setState({
            renderGroup: false,
            renderPeople: true,
            value:''
        })
        case 6:
        return this.setState({
            renderPeople: false,
            renderPlaces: true,
            value: []
        })
        case 7:
        return this.setState({
            renderPlaces: false,
            renderActivities: true,
            value: []
        })
        case 8:
        return this.setState({
            renderActivities: false,
            renderStay: true,
            value:[]
        })
        case 9:
        return this.setState({
            renderStay: false,
            renderTravel: true
        })
        case 10:
        return this.setState({
            renderTravel: false,
            renderAge: true
        })
        case 11:
        return this.setState({
            renderAge: false,
            renderGender: true
        })
        case 12:
        return this.setState({
            renderGender: false,
            renderEthnicity: true
        })
        case 13:
        return this.setState({
            renderEthnicity: false,
            renderComments: true

        })
        case 14:
        return this.setState({
            renderComments:false,
            renderEnd: true,
            renderTitle: false
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
  this.setState({ value: e});
}


  render() {
    return (
      <div>
        {this.state.renderTitle ?(
            <h1> Survey </h1>
        ):<div></div>}
        {this.state.renderStates ?(
            <div>
            <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                <h2 style={{color:"white"}}> Are you from the United States? </h2>
                <div style={{width:"50%", marginLeft:"25%" , marginright:"25%"}}>
                    <Button onClick={()=>this.handleClick(1, 'states','yes')} bsSize="large" block>Yes</Button>
                    <Button onClick={()=>this.handleClick(2, 'states','no')} bsSize="large" block>No</Button>
                </div>
            </Jumbotron>
            </div>
        ):<div></div>}


        {this.state.renderZipcode ?(
        <div>
            <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                <h2 style={{color:"white"}}> What is your Zip Code? </h2>
                <div style={{width:"50%", marginLeft:"25%" , marginright:"25%"}}>
                <form>
                    <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    >
                    <FormControl 
                    componentClass="input"
                    placeholder="Enter Zipcode"
                    inputRef={(ref) => {this.input = ref}}>
                    </FormControl>
                    </FormGroup>
                </form>
                <button onClick={()=>this.handleClick(3, 'zipcode', this.input.value)}>Enter</button>
                </div>
            </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderCountry ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> What country are you from? </h2>
          <SplitButton title="Choose a Country" onSelect={(evt)=>this.handleClick(4, 'country', evt)} pullRight id="split-button-pull-right" bsSize="large">
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
            <div style={{width:"50%", marginLeft:"25%", marginRight:"25%"}}>
              <Button  onClick={()=>this.handleClick(5, 'group', 'Alone')} bsSize="large"  block>Alone</Button>
              <Button  onClick={()=>this.handleClick(5, 'group', 'Group')} bsSize="large" block>Group</Button>
            </div>
        </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderPeople ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
           <h2 style={{color:"white"}}> How many people? (Including you) </h2>
           <div style={{width:"50%", marginLeft:"25%", marginRight:"25%"}}>
           <form>
           <FormControl 
                componentClass="input"
                placeholder="Enter Group Size"
                inputRef={(ref) => {this.input = ref}}>
            </FormControl>
        </form>
            <button onClick={()=>this.handleClick(6, 'people', this.input.value)}>Enter</button>
        </div>
        </Jumbotron>
        </div>
        ):<div></div>}
        
        {this.state.renderPlaces ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
            <h2 style={{color:"white"}}> What places did you visit? </h2>
            <FormGroup style={{width:"50%", marginLeft:"25%", marginRight:"25%"}}>
            <Row className="show-grid">
               <Col md={6} sm={6}>
               <ToggleButtonGroup
                type="checkbox"
                value={this.state.value}
                onChange={this.handleChange}
                >
                <ToggleButton value={'Cherry Hill'}>Cherry Hill</ToggleButton>
                <ToggleButton value={'Strawberry Fields (Imagine Mosaic)'}>Strawberry Fields (Imagine Mosaic)</ToggleButton>
                <ToggleButton value={'Bow Bridge'}>Bow Bridge</ToggleButton>
                <ToggleButton value={'Shakespeare Garden'}>Shakespeare Garden</ToggleButton>
                <ToggleButton value={'The Pool'}>The Pool</ToggleButton>
                <ToggleButton value={'The Loch'}>The Loch</ToggleButton>
                <br>
                </br>
                <br></br>
                <ToggleButton value={'The Ravine'}>The Ravine</ToggleButton>
                <ToggleButton value={'The Mall (Literary Walk)'}>The Mall (Literary Walk)</ToggleButton>
                <ToggleButton value={'Balto'}>Balto</ToggleButton>
                <ToggleButton value={'Bethesda Terrace (Bethesda Fountain)'}>Bethesda Terrace (Bethesda Fountain)</ToggleButton>
                <ToggleButton value={'Alice in Wonderland'}>Alice in Wonderland</ToggleButton>
                <ToggleButton value={'Conservatory Water'}>Conservatory Water</ToggleButton>
                <ToggleButton value={'Obelisk (Cleopatra`s Needle)'}>Obelisk (Cleopatra`s Needle)</ToggleButton>
                <ToggleButton value={'Reservoir'}>Reservoir</ToggleButton>
                <ToggleButton value={'Conservatory Garden'}>Conservatory Garden</ToggleButton>
                <ToggleButton value={'The Harlem Meer'}>The Harlem Meer</ToggleButton>
                </ToggleButtonGroup>
                </Col>
            </Row>
            </FormGroup>
            <button onClick={()=>this.handleClick(7, 'places', this.state.value)}>Enter</button>
        </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderActivities ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> What activities did you do? </h2>
          <FormGroup style={{width:"50%", marginLeft:"25%", marginRight:"25%"}}>
          <Row className="show-grid">
               <Col sm={5} md={5}>
               <ToggleButtonGroup
                type="checkbox"
                value={this.state.value}
                onChange={this.handleChange}
                >
                <ToggleButton value={'Bicycle Rentals'}>Bicycle Rentals</ToggleButton>
                <ToggleButton value={'Boating'}>Boating</ToggleButton>
                <ToggleButton value={'Ice Skating'}>Ice Skating</ToggleButton>
                <ToggleButton value={'Swimming'}>Swimming</ToggleButton>
                <ToggleButton value={'Zoo'}>Zoo</ToggleButton>
                <ToggleButton value={'Walk dog(s)'}>Walk dog(s)</ToggleButton>
                <ToggleButton value={'Picnic'}>Picnic</ToggleButton>
                <ToggleButton value={'Play sports'}>Play sports</ToggleButton>
                <ToggleButton value={'Walk'}>Walk</ToggleButton>
                <ToggleButton value={'Bike'}>Bike</ToggleButton>
                </ToggleButtonGroup>
                </Col>
            </Row>
            </FormGroup>
            <button onClick={()=>this.handleClick(8, 'activities', this.state.value)}>Enter</button>
        </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderStay ?(
        <div>
        <Jumbotron style={{backgroundColor:"#69ca6b"}}>
          <h2 style={{color:"white"}}> How long did you stay for/plan to stay for? </h2>
          <div style={{width:"50%", marginLeft:"25%", marginRight:"25%"}}>
            <Button onClick={()=>this.handleClick(9, 'stay', '1 hour')} bsSize="large" block>1 hour</Button>
            <Button onClick={()=>this.handleClick(9, 'stay', '2 hour')} bsSize="large" block>2 hours</Button>
            <Button onClick={()=>this.handleClick(9, 'stay', '3 hour')} bsSize="large" block>3 hours</Button>
            <Button onClick={()=>this.handleClick(9, 'stay', '4 hour')} bsSize="large" block>4 hours</Button>
            <Button onClick={()=>this.handleClick(9, 'stay', '5+ hour')} bsSize="large" block>5+ hours</Button>
          </div>
        </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderTravel ?(
            <div>
                <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                <h2 style={{color:"white"}}> How did you get to Central Park? </h2><div>
                    <FormGroup style={{marginLeft:"25%" , marginright:"25%"}}>
                    <ButtonToolbar>
                        <ToggleButtonGroup 
                        defaultValue={[1, 6]}                
                        type="checkbox"
                        value={this.state.value}
                        onChange={this.handleChange}>
                        <ToggleButton value={'Subway'}>Subway</ToggleButton>
                        <ToggleButton value={'Long Island Railroad (LIRR)'}>Long Island Railroad (LIRR)</ToggleButton>
                        <ToggleButton value={'Walking'}>Walking</ToggleButton>
                        <ToggleButton value={'Car'}>Car</ToggleButton>
                        <ToggleButton value={'Biking'}>Biking</ToggleButton>
                        <ToggleButton value={'Other'}>Other</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                    </FormGroup>
                    </div>
                    <button onClick={()=>this.handleClick(10, 'travel', this.state.value)}>Enter</button>    
                </Jumbotron>
            </div>
        ):<div></div>}

        {this.state.renderAge ?(
            <div>
                <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                    <h2 style={{color:"white"}}> Age </h2>
                    <div style={{width:"50%", marginLeft:"25%" , marginright:"25%"}}>
                        <Button onClick={()=>this.handleClick(11, 'age', '0-15')}  bsSize="large" block>0-15</Button>
                        <Button onClick={()=>this.handleClick(11, 'age', '15-24')}  bsSize="large" block>15-24</Button>
                        <Button onClick={()=>this.handleClick(11, 'age', '25-34')}  bsSize="large" block>25-34</Button>
                        <Button onClick={()=>this.handleClick(11, 'age', '35-44')}  bsSize="large" block>35-44</Button>
                        <Button onClick={()=>this.handleClick(11, 'age', '45-55')}  bsSize="large" block>45-55</Button>
                        <Button onClick={()=>this.handleClick(11, 'age', '55+')} bsSize="large" block>55+</Button>
                    </div>
                </Jumbotron>
            </div>
        ):<div></div>}

        {this.state.renderGender ?(
            <div>
                <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                    <h2 style={{color:"white"}}> Gender </h2>
                    <div style={{width:"50%", marginLeft:"25%" , marginright:"25%"}}>
                        <Button onClick={()=>this.handleClick(12, 'gender', 'Male')}  bsSize="large" block>Male</Button>
                        <Button onClick={()=>this.handleClick(12, 'gender', 'Female')} bsSize="large" block>Female</Button>
                        <Button onClick={()=>this.handleClick(12, 'gender', 'Other')} bsSize="large" block>Other</Button>
                        <Button onClick={()=>this.handleClick(12, 'gender', 'Prefer To Not Disclose')} bsSize="large" block>Prefer To Not Disclose</Button>
                    </div>
                </Jumbotron>
            </div>
        ):<div></div>}
        
        {this.state.renderEthnicity ?(
            <div>
                <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                    <h2 style={{color:"white"}}> Ethnicity </h2>
                    <div style={{width:"50%", marginLeft:"25%" , marginright:"25%"}}>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'White')} bsSize="large" block>White</Button>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'Hispanic or Latino')} bsSize="large" block>Hispanic or Latino</Button>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'Black or African American')} bsSize="large" block>Black or African American</Button>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'Native American or American Indian')} bsSize="large" block>Native American or American Indian</Button>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'Asian/Pacific Islander')} bsSize="large" block>Asian/Pacific Islander</Button>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'Other')} bsSize="large" block>Other</Button>
                        <Button onClick={()=>this.handleClick(13, 'ethnicity', 'Prefer To Not Disclose')} bsSize="large" block>Prefer To Not Disclose</Button>
                    </div>
                </Jumbotron>
            </div>
        ):<div></div>}

        {this.state.renderComments ?(
            <div>
                <Jumbotron style={{backgroundColor:"#69ca6b"}}>
                    <h2 style={{color:"white"}}> Further Comments </h2>
                    <div style={{width:"50%", marginLeft:"25%" , marginright:"25%"}}>
                        <br></br>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel></ControlLabel>
                            <FormControl 
                            componentClass="textarea"
                            placeholder="Comments"
                            inputRef={(ref) => {this.input = ref}}>
                            </FormControl>
                        </FormGroup>
                        <Button onClick={()=>this.handleClick(14, 'comments', this.input.value)} bsSize="large" block>Submit</Button>
                    </div>
                </Jumbotron>
            </div>
        ):<div></div>}

        {this.state.renderEnd ?(
        <div>
            <h1>Thank You For Completing Our Servey!</h1>
            <br></br>
            <p>insert button</p>
        </div>
        ):<div></div>}
      </div>
    )
  }
}
export default Survey;
