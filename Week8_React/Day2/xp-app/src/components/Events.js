import React, { Component } from 'react';

class Events extends Component {
    constructor(){
        super()
        this.state = {
            isToggleOn: true
        }
    }

    clickMe = () => {
        alert('I was clicked')
    }
    handleKeyPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            alert(`Enter was clicked, your input is ${e.target.value}`)
        }
    }
    toggleState = () => {
        this.setState((prevState)=>({isToggleOn: !prevState.isToggleOn }))
    }

    render() {
        return (
            <>
                <button onClick={this.clickMe}>click me btn</button><br />
                <input type="text" onKeyDown={this.handleKeyPress} /> <br />
                <button onClick={this.toggleState}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>

            </>
        );
    }
}

export default Events;