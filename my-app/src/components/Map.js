import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const access_token = "1914608601.0912694.5b122ac06ae84edab86b26fc648be469";

const Insta = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    if (accessTokenMatch) {
      accessToken = accessTokenMatch[1];
      return accessToken;
    } else {
      
      const Url = "https://api.instagram.com/v1/locations/12318445/media/recent?access_token=1914608601.0912694.5b122ac06ae84edab86b26fc648be469"
      window.location = Url;
    }
  },
  async display() {
    if (!accessToken) {
      this.getAccessToken();
    }
    try {
      let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`, {
        method: 'GET'
      });
      if (response.ok) {
        console.log(response);
        let jsonResponse = await response.json();
        let medias = jsonResponse.data.map(media => ({
          id: media.id,
          image: media.images.standard_resolution.url
        }));
        return medias;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
}

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      lat: [],
      lon: []
    };
  }
  static defaultProps = {
    center: {
      lat: 40.7829,
      lng: -73.9654
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAXwRRhtts9_moVQK-1UzK180zRBvjcQ-M'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.7829}
            lng={-73.9654}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
