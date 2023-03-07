import React, { Component } from 'react';
import Garage from './Garage';
import Events from './Events';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>This is {this.state.color} {this.props.data.model}</h1>

                <Garage size="small" />
                <Events />
            </div>
        );
    }
}

export default Car;