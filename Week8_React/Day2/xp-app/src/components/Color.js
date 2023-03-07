import React, { Component } from 'react';

class Color extends Component {
    constructor(){
        super()
        this.state = {
            favoriteColor: 'red'
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor: 'yellow'})
        }, 5000)
    } 

    render() {
        return (
            <div>
                <h1>My favourite color is {this.state.favoriteColor}</h1>
                <button onClick={()=>{this.setState({favoriteColor: 'blue'})}}>Change color</button>
            </div>
        );
    }
}

export default Color;