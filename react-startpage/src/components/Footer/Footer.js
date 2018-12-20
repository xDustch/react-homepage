import React, {Component} from 'react'
import './Footer.css'

import FavLink from './FavLink'

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <FavLink link="https://www.reddit.com/" icon="fab fa-reddit-alien" color="reddit"/>
                <FavLink link="https://www.twitch.tv/directory" icon="fab fa-twitch" color="twitch"/>
                <FavLink link="https://www.youtube.com" icon="fab fa-youtube" color="youtube"/>
                <FavLink link="https://github.com/xDustch?tab=repositories" icon="fab fa-github" color="github"/>
                <FavLink link="https://codepen.io/" icon="fab fa-codepen" color="codepen"/>
            </div>
        )
    }
}

export default Footer;