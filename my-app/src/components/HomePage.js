import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";


class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: undefined,
            icon: undefined
        }
    }

        toFarenheit(kelvin) {
            console.log(kelvin);
            let temp = (kelvin - 273.15) * 9/5 + 32;
            var result = parseInt(temp);
            return result;
        }
        
        getWeather = async () =>  {
        
            const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.7829&lon=-73.9654&APPID=296bae7bdc80a2170e070a88bd45571d";
        
            const api_call = fetch(weatherURL).then(
                response => response.json()).then(
                    data => {
                    
                    console.log(data.weather.icon)
                    
                    this.setState({
                    temperature: data.main.temp,
                    icon: data.weather[0].icon,
                    error: ""
                })
            }
        );



            //console.log(api_call);
                      
        }

        componentDidMount () {
            this.getWeather();
        }
    
  render() {
    return (
        <div>
            <Jumbotron>
            <div loadWeather={this.getWeather}>
    {this.state.temperature && <p>Temperature: {this.toFarenheit(this.state.temperature)} degrees</p>}
            {this.state.icon && <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`}/>}
            </div>    
                <div><h1>Welcome to Central Park!</h1></div>
                <div><h3>Thank you for visiting</h3></div> 
            </Jumbotron>
            <ul>
            <Button bsStyle="primary">Our Survey
            <Link to="/survey"></Link>
            </Button>
            </ul>
        </div>
    )
  }
}
export default HomePage;
