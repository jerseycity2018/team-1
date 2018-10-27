import React, { Component } from 'react';
import { Button, FormGroup, Grid, Row, Col, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import './../styles/dashboard.css';
import PieChart from 'react-minimal-pie-chart';



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
          <Row className="show-grid" className="border ">
            <Col md={12}>
              <h4 className="subtitles">Demographics</h4>
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
            </Col>
            <Col xs={12} md={4} xsOffset={1} className="border">
              <h4 className="subtitles">Places Visited</h4>
            </Col>
            <Col xs={12} md={3} mdOffset={1} className="border">
              <h4 className="subtitles">Weather</h4>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Dashboard;
