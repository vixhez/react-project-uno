import React from 'react';

class Counter extends React.Component
{
    constructor(props) {
        super(props);
    

        this.state = {
            counter: this.props.initialValue,
        };

    this.addClicks = this.addClicks.bind(this);
    this.removeClicks = this.removeClicks.bind(this);
    }

    addClicks() {
        this.setState({ counter: this.state.counter < this.props.maxValue ? this.state.counter + 1 : this.state.counter });
    }

    removeClicks() {
        this.setState({ counter: this.state.counter > 0 ? this.state.counter - 1 : this.state.counter });
    }

    render() {
        return (
            <>
                <p><b>Counter ~</b>{ this.state.counter }</p>
                <button onClick ={ this.removeClicks }>-</button>
                <button onClick={ this.addClicks }>+</button>

            </>
        )
    }
}

export default Counter;



// > 0 && this.state.counter < maxValue ? this.state.counter : "You have gone too low/high! Correct yourself using the relevant button." }