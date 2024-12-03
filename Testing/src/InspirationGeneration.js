
import * as React from 'react';

import programmings from './quotes.js';
import FancyText from './FancyText.js';
import Watch from './Watch.js';

export default function InspiraionGeneration({children}){
    const [index,setIndex]=React.useState(0);
    const programming=programmings[index];
    //Setting the imgoji action listener
    const [imoindex,setImo]=React.useState(0);
    const imojis = ['🇨++', '☕', '👩‍💻', '⚛️', '👾', '🐯'];
    //setting the color action listener
    const [colorIndex,setColor]=React.useState(0);
    const colors=['green','blue','magenta','purple','white','red'];
    //Now setting the event listener
    const next=()=>{
        setIndex((index+1) %programmings.length);
        setImo((imoindex+1) %imojis.length);
        setColor((colorIndex+1) %colors.length);
    };

    //Setting the update state of imogi
    const imgoi=imojis[imoindex];
    //setting the update of coloring
    const testcolor=colors[colorIndex];

    return(
        <div>
            <div style={{color:testcolor}}>
                <FancyText text={programming}/>
            </div>
            <button style={{color:testcolor}} onClick={next}>Inspired{imgoi}</button>
            <Watch />
        </div>
    );



}
