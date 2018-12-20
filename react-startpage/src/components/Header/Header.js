import React, {Component} from 'react'
import './Header.css'

import Weather from './Weather'
import Clock from './Clock'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Weather/>
                <Clock/>
            </div>
        );
    }
}

export default Header;