// import programmings from './quotes.js';
import FancyText  from './FancyText.js';
import InspiraionGeneration from './InspirationGeneration.js';
import Copyright from './Copyright.js';

export default function App(){
    return(
        <div>
            <FancyText title text="I am programming Lover,Do you?"/>
            <InspiraionGeneration>
                <Copyright year={2090}/>
            </InspiraionGeneration>

        </div>
    );
}

