// const Header = ({ children }) => (
//     <header>
//         <h1>{ children }</h1>
//     </header>
// );

// export default Header;

import React from 'react';

class Header extends React.Component
{
    render() {
        let { children } = this.props;

        return (
            <header>
            <h1>{ children }</h1>
        </header> 
        );
    }
}

export default Header;