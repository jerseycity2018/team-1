import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';



class Marker extends React.Component{
    render(){
        return <div className="marker">{this.props}</div>
    }
  }
  export default Marker;