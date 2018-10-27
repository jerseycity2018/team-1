import React, { Component } from 'react';
import SimpleMap from './Map';
import { Button, ListGroup, ListGroupItem, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import MiniPie from './MiniPie';
import { data, data1, data2 } from './data';
import Dog from './Dog-Walking.png';
import Skate from './Ice-Skating.png';
import Swim from './Swimming.png';
import Boat from './Boating.png';
import Bike from './Bike.png';
import Picnic from './Picnic.png';
import Sports from './Sports.png';
import Zoo from './Zoo.png';
import Other from './Other.png';
import Walk from './Walk.png';
import Sunny from './Sunny.png';
import Rain from './Rain.png';
import Snow from './Snow.png';
import Clouds from './Clouds.png';
import './../styles/dashboard.css';
import axios from 'axios';

let actPics = {};
actPics['Dog-Walking'] = Dog;
actPics['Ice-Skating'] = Skate;
actPics['Swimming'] = Swim;
actPics['Boating'] = Boat;
actPics['Bike'] = Bike;
actPics['Picnic'] = Picnic;
actPics['Sports'] = Sports;
actPics['Zoo'] = Zoo;
actPics['Other'] = Other;
actPics['Walk'] = Walk;

let weatherPics = {};
weatherPics['Sunny'] = Sunny;
weatherPics['Clouds'] = Clouds;
weatherPics['Rain'] = Rain;
weatherPics['Snow'] = Snow;

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      ethnicity: [],
      age: [],
      gender: [],
      origin: [],
      states: [],
      activity: [],
      time: [],
      group: [],
      place: [],
      weather: []
    };
  }

  componentDidMount() {
    let allStats = [];
    allStats.push(axios.get('/ages').then(response => {
      this.setState({age: response.data.data});
    }));
    allStats.push(axios.get('/gender').then(response => {
      this.setState({gender: response.data.data});
    }));
    allStats.push(axios.get('/ethnicity').then(response => {
      this.setState({ethnicity: response.data.data});
    }));
    allStats.push(axios.get('/location').then(response => {
      this.setState({location: response.data.data});
    }));
    allStats.push(axios.get('/activity').then(response => {
      this.setState({activity: response.data.data});
    }));
    allStats.push(axios.get('/group').then(response => {
      this.setState({group: response.data.data});
    }));
    allStats.push(axios.get('/origin').then(response => {
      this.setState({origin: response.data.data});
    }));
    allStats.push(axios.get('/states').then(response => {
      this.setState({states: response.data.data});
    }));
    allStats.push(axios.get('/weather').then(response => {
      this.setState({weather: response.data.data});
    }));
    allStats.push(axios.get('/hour').then(response => {
      this.setState({time: response.data.data});
    }));
    allStats.push(axios.get('/places').then(response => {
      this.setState({place: response.data.data});
    }));
    Promise.all(allStats).then(() => {
      return true;
    })
  }

  render() {
    let listActivities = this.state.activity.map((activity) => {
        return (
          <ListGroupItem><img className="adjustSize" src={actPics[activity.activity]}/> <br/><br/> <b>{activity.activity}</b> : {activity.total} people</ListGroupItem>
        );
    });

    let listPlaces = this.state.place.map((place) => {
        return (
          <li>{place.place} - {place.total} people</li>
        );
    });

    let listTimes = this.state.time.map((hour) => {
        return (
          <li>Hour {hour.hour} - {hour.total} people</li>
        );
    });

    let listWeather = this.state.weather.map((weather) => {
        return (
          <ListGroupItem><img className="adjustSize" src={weatherPics[weather.weather]}/><b>{weather.weather}</b> : {weather.total} people</ListGroupItem>
        );
    });

    let listOrigin = this.state.origin.sort((a,b) => {
      if (a.total < b.total) return 1;
      if (a.total > b.total) return -1;
      return 0;
    }).slice(0,3).map((origin) => {
        return (
          <li><b>{origin.country}</b> : {origin.total} people</li>
        );
    });

    let listStates = this.state.states.sort((a,b) => {
      if (a.total < b.total) return 1;
      if (a.total > b.total) return -1;
      return 0;
    }).slice(0,3).map((state) => {
        return (
          <li><b>{state.state}</b> : {state.total} people</li>
        );
    });

    let listGroup = this.state.group.sort((a,b) => {
      if (a.total < b.total) return 1;
      if (a.total > b.total) return -1;
      return 0;
    }).map((group) => {
        return (
          <li><b>{group.group} person(s)</b> : {group.total} groups</li>
        );
    });

    return (
      <div>
      <div>
        <header className="headerstyle">
            Central Park Visitor Statistics
        </header>
        </div>
        <Grid className="top-buffer">
          <Row className="show-grid" className="border ">
              <h2 className="subtitles">Demographics</h2>
              <Col xs={12} md={5}>
                <h3 className="pieName">ETHNICITY</h3>
                <MiniPie width={370} height={270} data={data}/>
              </Col>
              <Col xs={12} md={5} xsOffset={2}>
                <h3 className="pieName">AGE</h3>
                <MiniPie width={370} height={270} data={data1}/>
              </Col>
              <Row className="show-grid">
                <Col md={12} className = "pieName">
                  <h3 className="pieName">GENDER</h3>
                  <MiniPie width={370} height={270} data={data2}/>
                </Col>
              </Row>
          </Row>
          <Row className="top-buffer">
            <Col xs={12} md={3} className="border">
              <h4 className="subtitles">Origins</h4>
              <h4>Top Three States</h4>
              <ListGroup>
                {listStates}
              </ListGroup>
              <h4>Other Countries</h4>
              <ListGroup>
                {listOrigin}
                <button>See Raw Data</button>
              </ListGroup>
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border">
              <h4 className="subtitles">Group Size</h4>
              <ListGroup>
                {listGroup}
              </ListGroup>
            </Col>
            <Col xs={12} md={3} mdOffset={1} className="border">
              <h4 className="subtitles">Time</h4>
              <ListGroup>
                {listTimes}
              </ListGroup>
            </Col>
          </Row>
          <Row className="top-buffer bottom-buffer">
            <Col xs={12} md={3} className="border">
              <h4 className="subtitles">Activities</h4>
              <ListGroup>
                {listActivities}
              </ListGroup>
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border">
              <h4 className="subtitles">Places Visited</h4>
              <ul>
                {listPlaces}
              </ul>
            </Col>
            <Col xs={12} md={3} mdOffset={1} className="border">
              <h4 className="subtitles">Weather</h4>
              <ListGroup>
                {listWeather}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
        <SimpleMap />
      </div>
    );
  }
}

export default Dashboard;
