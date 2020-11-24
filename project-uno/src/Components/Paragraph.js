// const Paragraph = ({ children }) => (
//     <p>
//         { children }
//     </p>
// );

// Paragraph.defaultProps = {
//     children: "Hello, world!"
// };

import React from 'react';

class Paragraph extends React.Component
{
    render() {
        let { children } = this.props;

        return (
            <p>
                { children }
            </p>
        );
    }
}

Paragraph.defaultProps = {
    children: "Hello, world!",
};

export default Paragraph;