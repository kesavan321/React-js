import { useState } from "react";

export default function Namechangewhileclick()  {

    let pname='Kesav';
     
    const v1=()=>{
       setNam(pname)
    }

    const[v,setNam]=useState('pradeep');



    return(
      <>
     
      <div>
      <button type="button" className="btn btn-primary m-2" onClick={v1}>change the name</button>  {v}
      </div>
      
      
      
      
      </>




    );
}