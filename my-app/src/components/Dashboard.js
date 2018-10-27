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

          <Row className="show-grid" className="border">
            <Col md={12}>
              <code>{'<Col md={12} />'}</code>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3} className="border">
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border">
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
            <Col xs={12} md={3} mdOffset={1} className="border">
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
