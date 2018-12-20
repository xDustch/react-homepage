import React, {Component} from 'react'
import './Header.css'

import Weather from './Weather'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Weather/>
            </div>
        );
    }
}

export default Header;