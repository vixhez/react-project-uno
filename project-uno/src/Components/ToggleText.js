import React from 'react';

class ToggleText extends React.Component
{
    constructor (props) {
        super(props);

        this.state = {
            clicks: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
        const { initial, alternate } = this.props; 

        return (
            <>
                <p>{ this.state.clicks % 2 === 0 ? initial : alternate }</p>
                <button onClick={ this.handleClick }>Toggle</button>
            </>
        );
    }
}

export default ToggleText;