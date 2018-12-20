import React, {Component} from 'react'

class Clock extends Component{

    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }

    componentWillMount()
    {
        this.interval = setInterval(
            ()=>this.tick(), 1000
        )
    }
    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    tick(){
        this.setState({time: new Date().toLocaleTimeString()})
    }

    render(){
        return(
            <div className="Clock">
                {this.state.time}
            </div>
        )
    }
}

export default Clock;