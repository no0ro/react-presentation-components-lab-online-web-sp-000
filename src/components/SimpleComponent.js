import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            mood: "happy"
        }
    }


    handleClick = () => {
        let updatedMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: updatedMood
        })
    }

    render() {
        return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
      
    
}
export default SimpleComponent