import People from "./People";

const rightStuffStyling = {
    maxWidth: '70%',
    float: 'right',
}

const RightStuff = () => (
    <main style={{ rightStuffStyling }}>
        <People />
    </main>
)

export default RightStuff;