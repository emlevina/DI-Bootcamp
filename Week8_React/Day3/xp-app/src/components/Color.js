import React, { Component } from 'react';
import Child from './Child';

class Color extends Component {
    constructor() {
        super()
        this.state = {
            favoriteColor: 'red',
            show: true
        }
        this.snapshotRef = React.createRef()
        this.h1Ref = React.createRef()
    }

    shouldComponentUpdate = () => true

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' })
        }, 5000)
    }

    componentDidUpdate() {
        const h1 = this.h1Ref.current;
        return h1.innerText = `You knew my favorite color is ${this.state.favoriteColor}?`;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const div = this.snapshotRef.current;
        return div.innerText = `And my previous was ${prevState.favoriteColor}`;
    }

    render() {
        return (
            <div>
                <h1 ref={this.h1Ref}>My favourite color is {this.state.favoriteColor}</h1>
                <div ref={this.snapshotRef}></div>
                <button onClick={() => { this.setState({ favoriteColor: 'blue' }) }}>Change color</button>
                {this.state.show && <Child />}
                <br />
                <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child</button>
            </div>
        );
    }
}

export default Color;