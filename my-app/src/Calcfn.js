import { useState } from "react";

export default function Calcfn() {
   
     
        const f =()=> {
            setNa(na+1)
        }
        const d =()=>{
            setNa(na-1)
        }

        const j =()=>{
            setNa(0);
            setName(0);
        }

        const m =()=>{
            setName(name+1)
        }

        


        const [name,setName]=useState(0);

        // const [nam,setNam]=useState(0);

        const [na,setNa]=useState(0);
 
    return(
    
        <>

<div className="d-flex justify-content-center"><h1>{na}</h1></div>
        <div className="d-flex justify-content-start">
        
        <div><button type="button" className="btn btn-success m-2" onClick={f} >+</button></div>
        <div><button type="button" className="btn btn-success m-2" onClick={j} >RESET</button></div>
        <div><button type="button" className="btn btn-success m-2" onClick={d} >-</button></div>
        <div><button type="button" className="btn btn-success m-2" onClick={m} >You have clicked the button {name} </button></div>
        

        </div>
        

        
       
        

     

        

       

        
        </>

         );  
}

