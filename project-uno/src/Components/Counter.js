import React from 'react';

class Counter extends React.Component
{
    constructor(props) {
        super(props);
    

        this.state = {
            counter: 50,
        };

    this.addClicks = this.addClicks.bind(this);
    this.removeClicks = this.removeClicks.bind(this);
    }

    addClicks() {
        this.setState({ counter: this.state.counter + 1 });
    }

    removeClicks() {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        let { maxValue } = this.props;
        return (
            <>
                <p>{ this.state.counter > 0 && this.state.counter < maxValue ? this.state.counter : "You have gone too low/high! Correct yourself using the relevant button." }</p>
                <button onClick ={ this.removeClicks }>-</button>
                <button onClick={ this.addClicks }>+</button>

            </>
        )
    }
}

export default Counter;