import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem, Row } from "react-bootstrap";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: undefined,
            icon: undefined,
            main: undefined
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

                    this.setState({
                    temperature: data.main.temp,
                    icon: data.weather[0].icon,
                    main: data.weather[0].main,
                    error: ""
                })
            }
        );
        }

        checkWeather (condition) {

            var pics = {
                rain:"https://images.fineartamerica.com/images-medium-large/central-park-in-the-rain-greg-norrell.jpg",
                snow:"https://cdn.traveltripper.io/site-assets/426_558_10572/media/2017-12-28-103700/Wintertime-In-Central-Park.jpg",
                sun:"http://www.sherrynetherland.com/resources/media/user/1479089826-bethesda-terrace.jpg",
                cloud:"https://c1.staticflickr.com/5/4055/4544739106_ce87be74d5_b.jpg"
            }
            console.log(condition);
            console.log(pics);

            if(condition === 'Rain'){
                console.log(pics.rain);
                return pics.rain;
            }

            if (condition === 'Clear') {
                console.log(pics.snow);
                return pics.snow;
            }

            if (condition === 'Clear') {
                console.log(pics.sun);
                return pics.sun;
            }
        }

        componentDidMount () {
            this.getWeather();
            this.checkWeather(this.main);
        }

    
  render() {
    return (
        <div>
            <Jumbotron style={{marginBottom: '0', paddingTop: '0', paddingBottom: '15px'}}>
            <div loadWeather={this.getWeather}>
            <span className="text-center"><h1>Welcome to Central Park!</h1>
            <span className="text-center"><h3>Thank you for visiting</h3>
            {this.state.icon && <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} rounded/>} 
            {this.state.temperature && <span style={{fontFamily:'Helvetica'}}>Central Park: {this.toFarenheit(this.state.temperature)} degrees</span>}
            </span>
            <Button bsSize="large" style={{color:'#79bf43', float:'right'}}><div style={{fontWeight:'bold'}}>Help Us Help You</div>
            <Link to="/survey"></Link>
            </Button>
            </span> 
            </div>
            </Jumbotron>
            {this.state.main && <img  style={{width: '100%', maxHeight: '500px'}} src={this.checkWeather(this.state.main)}/>}
        </div>
    )
  }
}
export default HomePage;
