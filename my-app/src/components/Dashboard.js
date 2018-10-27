import React, { Component } from 'react';
import { Button, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import './../styles/dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
      <div>
        <header>
            Central Park Statistics
        </header>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <code>{'<Col md={12} />'}</code>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
            <Col xs={12} md={3} xsOffset={1}>
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
            <Col xs={12} md={3} xsOffset={1}>
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
