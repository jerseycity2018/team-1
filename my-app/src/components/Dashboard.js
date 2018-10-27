import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import MiniPie from './MiniPie';
import { data, data1, data2 } from './data';
import Dog from './Dog-Walking.png';
import Skate from './Ice-Skating.png';
import Swim from './Swimming.png';
import Boat from './Boating.png';
import './../styles/dashboard.css';
import axios from 'axios';

let actPics = {};
actPics['Dog-Walking'] = Dog;
actPics['Ice-Skating'] = Skate;
actPics['Swimming'] = Swim;
actPics['Boating'] = Boat;

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      ethnicity: [],
      age: [],
      gender: [],
      location: [],
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
          <li>{place.place} - {place.total}</li>
        );
    });

    let listWeather = this.state.weather.map((weather) => {
        return (
          <li><img src={weather.image}/>{weather.weather} - {weather.total}</li>
        );
    });

    let listGroup = this.state.weather.map((weather) => {
        return (
          <li><img src={weather.image}/>{weather.weather} - {weather.total}</li>
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
              <h3>Top Three States</h3>
              <h3>
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border">
              <h4 className="subtitles">Group Size</h4>
            </Col>
            <Col xs={12} md={3} mdOffset={1} className="border">
              <h4 className="subtitles">Time</h4>
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
              <ul>
                {listWeather}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
