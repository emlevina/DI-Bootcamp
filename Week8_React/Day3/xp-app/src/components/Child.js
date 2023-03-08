import React, { Component } from 'react';

class Child extends Component {
    componentWillUnmount(){
        alert('I am about to be unmounted')
    }

    render() {
        return (
            <h1>
                Hello World!
            </h1>
        );
    }
}

export default Child;