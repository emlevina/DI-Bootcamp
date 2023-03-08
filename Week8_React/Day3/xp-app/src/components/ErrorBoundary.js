import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    componentDidCatch(error, info) {
        this.setState({ error: info })
    }

    render() {
        if (this.state.error) {
            console.log(this.state.error.componentStack)
            return (
                <>
                    <p>hello, there is a problem</p>
                    <small>Here: {this.state.error.componentStack}</small>
                </>)
        }
        return this.props.children
    }
}

export default ErrorBoundary;