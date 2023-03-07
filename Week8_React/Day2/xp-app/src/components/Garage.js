import React, { Component } from 'react';

class Garage extends Component {
    render() {
        return (
            <div>
                Who lives in my {this.props.size} garage
            </div>
        );
    }
}

export default Garage;