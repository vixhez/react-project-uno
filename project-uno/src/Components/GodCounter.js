import React from 'react';

class GodCounter extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.eventHandler = this.eventHandler.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.eventHandler);
    }

    eventHandler() {
        this.setState({ counter: this.state.counter + 1 });
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.eventHandler);
    }

    render() {
        return (
        <>
            <h1>{ this.state.counter }</h1>
        </>
        );
    }
}

export default GodCounter;