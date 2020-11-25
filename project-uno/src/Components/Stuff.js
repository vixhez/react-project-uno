import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import StepCounter from "./StepCounter";
import CatchMeIfYouCan from "./CatchMeIfYouCan";
import RollCall from "./RollCall";

const Stuff = ({ square }) => (
    <>
        <Header>Greetings landlovers</Header>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
        { square ? (<Square />) : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
        <Clicked />
        <ToggleText initial="Hello" alternate="World" />
        <Counter initialValue={ 50 } maxValue={ 100 } />
        <StepCounter maxValue={ 100 } stepValue={ 5 } />
        <br/>
        <CatchMeIfYouCan jump={ 100 }/>
        <RollCall names={ ["Yolanda Tulip", "Gillian Starlight", "William Shakespeare", "James Blake", "Harriet Coriander"] } />
    </>
    );

    Stuff.defaultProps = {
        square: true,
    }



export default Stuff;