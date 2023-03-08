import React, { Component } from 'react';

class BuggyCounter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            if(this.state.counter >=4) throw Error
            return ({ counter: prevState.counter + 1 })
        })
    }


    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default BuggyCounter;