import { useState } from 'react';
import buses from './data.js';

export default function App(){
  const [index,setIndex]=useState(0);
  const [showIndex,setShowIndex]=useState(false);
  const hasNext=index <buses.length-1;
  const [colorindex,setColorIndex]=useState(0);
  const colors=['green','blue','red','yellow'];


  // I am gonna create a handleNext function userhandle userState
  function NextHandle(){
    if(hasNext){
      setIndex(index+1);
      setColorIndex(colorindex+1);
    }
    else{
      setIndex(0);
      setColorIndex(0);
    }
  }
  let color=colors[colorindex];

  //Now I am creating a showDetails userevent function of a simply function
  function ShowMore(){
    setShowIndex(!showIndex);
  }
  let bus=buses[index];
  return(
    <div>

      <h1>I am gonna to show somthing you about our buses. Are you ready!/a></h1>
      <h1 style={{color:color}}>Position:{bus.position+' '}[{bus.name}]</h1>
      <h3><b style={{color:"green"}}>Brand:</b>{' '+bus.category}</h3>
      <h2 style={{color:color}}>{bus.avgspeed}</h2>
      <p>wow!{bus.imogi}</p>
      <button onClick={NextHandle}>
        Next

      </button>

      <button onClick={ShowMore}>
        {showIndex ? 'HideMe':'ShowMe'} details

      </button>
      {showIndex && <p>{bus.descpription}</p>}
      <img
      className="avatar"
      src={bus.image}
      alt={bus.name}
      />



    </div>
  );


}
