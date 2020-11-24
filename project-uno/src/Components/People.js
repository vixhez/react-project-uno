// const People = ({ names }) => (
//     !names ? <p>Nothing to see here</p> : 
//     <ul class="list-item-group">
//         { names.map((name, index) =>  (
//         <li key={ index }>{ name }</li>
//         )) }
//     </ul>
// );

import React from 'react';

class People extends React.Component
{
    handleClick() {
        console.log('Hello wooorld!');
    }

    render() {
        let { names } = this.props;
        return (
            !names ? <p>Nothing to see here</p> : 
            <ul className="list-item-group" onClick={ () => this.handleClick() }>
                { names.map((name, index) =>  (
                <li key={ index }>{ name }</li>
                )) }
            </ul>
        );
    }
}


export default People;