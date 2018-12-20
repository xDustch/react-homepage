import React, {Component} from 'react'
import './Footer.css'

import FavLink from './FavLink'

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <FavLink link="https://www.youtube.com" icon="fab fa-youtube" color="youtube"/>
                <FavLink link="https://www.twitch.tv/directory" icon="fab fa-twitch" color="twitch"/>
               
            </div>
        )
    }
}

export default Footer;