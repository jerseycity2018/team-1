import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// getWeather = async () =>  {
        
//   const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.7829&lon=-73.9654&APPID=296bae7bdc80a2170e070a88bd45571d";

//   const api_call = fetch(weatherURL).then(
//       response => response.json()).then(
//           data => {

//           this.setState({
//           temperature: data.main.temp,
//           icon: data.weather[0].icon,
//           main: data.weather[0].main,
//           error: ""
//       })
//   }
// );
// }



// class Marker extends React.Component{
//   render(){
//       return <div className="marker">{this.props.text}</div>
//   }
// }
// export default Marker;


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

  getInsta() {

    const Url = "https://api.instagram.com/v1/media/search?lat=40.7829&lng=-73.9654&access_token=1914608601.0912694.5b122ac06ae84edab86b26fc648be469"

    // const Url = "https://api.instagram.com/v1/locations/12318445/media/recent?access_token=1914608601.0912694.5b122ac06ae84edab86b26fc648be469"
    
      const api_call = fetch(Url).then(
      response => response.json()).then(
          data => {

            // var picture = data[i].images.thumbnail.url;
            // var lat = data[i].location.latitude;
            // var lon = data[i].location.longitude;
              for(var i=0; i<data.data.length; i++){
                let pics = this.state.pics
                pics.push(data.data[i].images.thumbnail.url)
                let lat = this.state.lat
                lat.push(data.data[i].location.latitude)
                let lon = this.state.lon
                lon.push(data.data[i].location.longitude)
                // this.setState({
                // pics: pics,
                // lat: lat,
                // lon: lon
                // })


                // this.state.pics.push(data[i].images.thumbnail.url);
                // this.state.lat.push(data[i].location.latitude);
                // this.state.lon.push(data[i].location.longitude);
              }

            console.log(this.state)
          // this.setState({
          // temperature: data.main.temp,
          // icon: data.weather[0].icon,
          // main: data.weather[0].main,
          // error: ""
      })
  }

  //   async display() {
  //     if (!accessToken) {
  //       this.getAccessToken();
  //     }
  //     try {
  //       let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`, {
  //         method: 'GET'
  //       });
  //       if (response.ok) {
  //         console.log(response);
  //         let jsonResponse = await response.json();
  //         let medias = jsonResponse.data.map(media => ({
  //           id: media.id,
  //           image: media.images.standard_resolution.url
  //         }));
  //         return medias;
  //       }
  //       throw new Error('Request failed!');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  componentDidMount () {
    this.getInsta();
}

  render() {
    return (

      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAXwRRhtts9_moVQK-1UzK180zRBvjcQ-M'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        //   {.state.map((this) => {
        //     return <Marker
        //         lat={this.state.lat}
        //         lng={this.state.lon}
        //         text={this.state.pics}
        //     ></Marker>
        //  })}
        >
          <AnyReactComponent
            // lat={this.state.lat}
            // lng={this.state.lon}
            // img={this.state.pics}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
