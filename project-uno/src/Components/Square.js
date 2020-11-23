const Square = ({ colour }) => (
    <div style={{ 
        backgroundColor: colour,
        width: 200,
        height: 200,
     }} /> 
);

Square.defaultProps = {
    colour: "purple",
};

export default Square;