import React from "react";

class Clicked extends React.Component
{
    constructor(props) {
        super(props);
        
        this.state = {
            clicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        return (
            <p onClick={ this.handleClick }>{ this.state.clicked ? "Clicked" : "Not clicked" }</p>
        );
    }
}

export default Clicked;