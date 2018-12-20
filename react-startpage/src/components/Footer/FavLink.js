//PROPS
//link - link to the page
//icon - font awesome icon code
//color - brand color when hovered

import React, {Component} from 'react';
import './FavLink.css'
class FavLink extends Component{
  render(){
      return(
          <div className="FavLink">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" id={this.props.color}><span className={this.props.icon}></span></a>
          </div>
      );
  }
}

export default FavLink;