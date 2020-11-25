import React from 'react';

class StepCounter extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    
    this.addClicks = this.addClicks.bind(this);
    this.removeClicks = this.removeClicks.bind(this);
    }

    addClicks() {
        this.setState({ counter: this.state.counter < this.props.maxValue ? this.state.counter + 5 : this.state.counter });
    }

    removeClicks() {
        this.setState({ counter: this.state.counter > 0 ? this.state.counter - 5 : this.state.counter });
    }

    render() {
        let { maxValue } = this.props; 
        
        return (
            <>
                <p><b>Step Counter ~</b>{ this.state.counter }</p>
                <button onClick ={ this.removeClicks }>-</button>
                <button onClick={ this.addClicks }>+</button>
            </>
        );
    }

}

export default StepCounter;