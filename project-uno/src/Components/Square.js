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
        return (
            <div onClick={ this.handleClick } style={ this.state.clicks % 2 === 0 ? {backgroundColor: 'hotpink', width: 200, height: 200 } : {backgroundColor: 'green', width: 200, height: 200 } }></div>
        );
    }
}

export default Square;