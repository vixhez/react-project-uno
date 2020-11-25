import React from 'react';

class RollCall extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            arrayPosition: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ arrayPosition: this.state.arrayPosition === this.props.names.length ? this.state.arrayPosition - this.props.names.length : this.state.arrayPosition + 1 });
    }

    render() {
        let { names } = this.props;
        
        return (
            <>
                <p>{ this.state.arrayPosition >= names.length ? names[0] : names[this.state.arrayPosition] }</p>
                <button onClick={ this.handleClick }>Next</button>
            </>
        );
    }
}

export default RollCall;