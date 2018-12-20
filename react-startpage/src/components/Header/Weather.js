import React, {Component} from 'react'

const cityName = "Buenos Aires"
const key = "a1e5febdfa639bcd12bec5953b5281ef"
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`

class Weather extends Component{
    constructor(){
        super()
        this.state = {
            temperature: ''
        }
    }
    
    componentWillMount(){
    
    
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              temperature: Math.floor(result.main.temp),
            });
          }
        )
    }

    render(){
        return(
            <div className="Weather">
            {this.state.temperature} °C
            </div>
        )
    }
}

export default Weather;