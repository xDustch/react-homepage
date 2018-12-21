import React, {Component} from 'react'
import './Weather.css'

const cityName = "Buenos Aires"
const key = "a1e5febdfa639bcd12bec5953b5281ef"
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`

class Weather extends Component{
    constructor(){
        super()
        this.state = {
            temperature: '',
            icon: ''
        }
    }
    
    componentWillMount(){
    
    
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              temperature: Math.floor(result.main.temp),
              icon: result.weather[0].icon,
            });
          }
        )
    }

    render(){

        const img = `http://openweathermap.org/img/w/${this.state.icon}.png`
        return(
            <div className="Weather">
            {this.state.temperature} °C 
            <img src={img} alt="weather-icon" className="weather-icon"/>
            </div>
        )
    }
}

export default Weather;