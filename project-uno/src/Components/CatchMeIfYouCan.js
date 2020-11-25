import React from 'react';

class CatchMeIfYouCan extends React.Component
{
    constructor(props) {
        super(props);
    

        this.state = {
            jump: this.props.jump,
        }

    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ jump: this.state.jump + this.props.jump });
    }

    render() {
        return (
            <button onClick={this.handleClick} style={{ marginTop: this.state.jump }}>Yippppeeee!</button>
        );
}

}

export default CatchMeIfYouCan;