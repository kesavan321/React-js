import { useState } from "react";
import axios from 'axios';
import { API1 } from "./api";

export default function Registerform() {
    const [name1,setName1]=useState([]);

    const [name,setName]=useState('');
    const [password,setpassword]=useState('');
    const [confirmpassword,confirmsetpassword]=useState('');
     const a = (b)=>{
         b.preventDefault();
         axios.post(API,{NAME:name,PASSWORD:password,CONFIRMPASSWORD:confirmpassword})
         setName('')
         setpassword('')
         confirmsetpassword('')
     }

     axios.get(API1).then((t)=>{
        //  console.log(t.data);
        setName1(t.data)
     })
     


    return(
   <>
   <br></br>
   <form onSubmit={a}>
   <div> <p className="fs-1 font-monospace fw-bolder text-danger bg-dark p-2 container" > New Registration form</p></div>
    
    <div className="container bg-danger p-3">
    
     <div className="container bg-dark p-2 ">
     <div><input type="text" id="name" className="form-control p-2 w-25 m-3" placeholder=" ENTER YOUR NAME" required  value={name}  onChange={(e)=>setName(e.target.value)} /></div>
     <div><input type="password" id="pass" className="form-control p-2 w-25 m-3 " placeholder=" CREATE NEW PASSWORD" required value={password} onChange={(e)=>setpassword(e.target.value)} /></div>
     <div><input type="password" id="pass" className="form-control p-2 w-25 m-3 " placeholder=" CONFIRM PASSWORD" required value={confirmpassword} onChange={(e)=>confirmsetpassword(e.target.value)} /></div>
     <div><button className="btn btn-primary p-2 m-3" type="submit">login</button></div>
     </div>

    </div>
   </form>
   <div>
      {name1.map((t)=>(
        <li>{t.NAME}</li>
      ))}
   </div>
    </>   
    );
}