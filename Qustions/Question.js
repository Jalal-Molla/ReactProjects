import {useState } from 'react';
export default function JalalApp(){
  const [answer,setAnswer]=useState('');
  const [err,setErr]=useState(null);
  const [status,setStatus]=useState('typing');

  if(status==='success'){
    return(
      <>
      <h1>Congratulation Man---Md Jalal Molla ♨️ ☕♨ (Java )</h1>
      <img src="easmile.png"
      alt="name"
      height="100px"
      width="80px"
      />
      </>
    );
  }

  async function FunctionHandle(e){
    e.preventDefault();
    setStatus('typing');
    try{
      await SubmitForm(answer);
      setStatus('success');

    }
    catch(err){
      setStatus('typing');
      setErr(err);
    }
  }
function evenHandlefunction(e){
  setAnswer(e.target.value);
}
  return(
    <div>
      <h1>What is called mother language in programmming .</h1>
    <form onSubmit={FunctionHandle}>
    <textarea
    placeholder="Please type the answer to be amusing......."
    value={answer}
    diabled={status==="beegining"}
    onChange={evenHandlefunction}
    />
    <br />
    <button
    disabled={(answer.length===0 ||
      status==="beegining"
    )}
    >submit</button>
    {err!==null &&
    <p>{err.message}</p>}
    </form>
    </div>
  );
}

function SubmitForm(answer){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let shouldErr=answer.toLowerCase()!=="java"
      if(shouldErr){
        reject(new Error("Opps Your answer is wrong"));

      }
      else{
        resolve();

      }

    },1000)
  })


}
