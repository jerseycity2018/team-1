import React, { Component } from 'react';
import { Button, ListGroup, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import MiniPie from './MiniPie';
import { data, data1, data2 } from './data';
import './../styles/dashboard.css';

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
  }

  render() {
    let listActivities = this.state.activity.map((activity) => {
        return (
          <li><img src={`./${activity.activity}.png`}/> {activity.activity} - {activity.total}</li>
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

    return (
      <div>
      <div>
        <header className="headerstyle">
            Central Park Statistics
        </header>
        </div>
        <Grid className="top-buffer">
          <Row className="show-grid" className="border ">
              <h4 className="subtitles">Demographics</h4>
              <Col xs={12} md={5}>
                <h4>ETHNICITY</h4>
                <MiniPie width={370} height={270} data={data}/>
              </Col>
              <Col xs={12} md={5} xsOffset={2}>
                <h4>AGE</h4>
                <MiniPie width={370} height={270} data={data1}/>
              </Col>
              <Row className="show-grid">
                <Col md={12}>
                  <h4>GENDER</h4>
                  <MiniPie width={370} height={270} data={data2}/>
                </Col>
              </Row>
          </Row>
          <Row className="top-buffer">
            <Col xs={12} md={3} className="border">
              <h4 className="subtitles">Location</h4>
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border">
              <h4 className="subtitles">Group Size</h4>
            </Col>
            <Col xs={12} md={3} mdOffset={1} className="border">
              <h4 className="subtitles">Time</h4>
            </Col>
          </Row>
          <Row className="top-buffer">
            <Col xs={12} md={3} className="border">
              <h4 className="subtitles">Activities</h4>
              <ol>
                {listActivities}
              </ol>
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
