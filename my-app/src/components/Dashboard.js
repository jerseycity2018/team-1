import React, { Component } from 'react';
import { Button, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import './../styles/dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
      <div>
        <header className="headerstyle">
            Central Park Statistics
        </header>
        </div>

        <Grid className="top-buffer">
          <Row className="show-grid" className="border">
            <Col md={12}>
              <code>{'<Col md={12} />'}</code>
            </Col>
          </Row>
          <Row className="top-buffer">
            <Col xs={12} md={3} className="border">
              <code>{'<Col xs={12} md={4} />'}</code>
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border subtitles">
              <h4>Group Size</h4>

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
