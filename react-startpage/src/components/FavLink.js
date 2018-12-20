import React, {Component} from 'react';
import './FavLink.css'
class FavLink extends Component{
  render(){
      return(
          <div className="FavLink">
            <a href={this.props.link} class="itg" target="_blank" rel="noopener noreferrer" id={this.props.color}><span class={this.props.icon}></span></a>
          </div>
      );
  }
}

export default FavLink;