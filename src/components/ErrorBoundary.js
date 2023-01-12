// Error boundaries is an example of when class based components is needed.

import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    componentDidCatch(error) {
        console.log(error);
        this.setState({hasError: true})
    }
    render() {
        if (this.state.hasError) {
           return <p>Error Ash!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;