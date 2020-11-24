import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import ToggleText from "./ToggleText";
import Counter from "./Counter";

const Stuff = ({ square }) => (
    <>
        <Header>Greetings landlovers</Header>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
        { square ? (<Square />) : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
        <Clicked />
        <ToggleText />
        <Counter maxValue={100} />
    </>
    );

    Stuff.defaultProps = {
        square: true,
    }



export default Stuff;