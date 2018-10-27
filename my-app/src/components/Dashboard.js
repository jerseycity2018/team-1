import React, { Component } from 'react';
import { Button, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import './../styles/dashboard.css';
import PieChart from 'react-minimal-pie-chart';



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
          <Row className="show-grid" className="border ">
            <Col md={12}>
              <div>
              <PieChart
                data={[
                  { value: 10, color: '#E38627' },
                  { value: 15, color: '#C13C37' },
                  { value: 20, color: '#6A2135' },
                ]}
                lengthAngle={-360}
                animate
              />
              </div>
              <div>
              </div>
              <div>
              </div>
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
