// const Square = ({ colour }) => (
//     <div style={{ 
//         backgroundColor: colour,
//         width: 200,
//         height: 200,
//      }} /> 
// );

// Square.defaultProps = {
//     colour: "purple",
// };

import React from 'react';

class Square extends React.Component
{
    constructor(props) {
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
        const { colour } = this.props;
        return (
            <div
            onClick={this.handleClick}
            style={{ backgroundColor: this.state.clicks % 2 === 0 ? "hotpink" : "green", width: 200, height: 200 }}>
          </div>
        );
    }
}

export default Square;