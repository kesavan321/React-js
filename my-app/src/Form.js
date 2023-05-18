import { useEffect, useState } from "react";
import axios from 'axios';
import { API } from "./api";

export default function Form() {
   const [name,setName]=useState('');
   const [password,setpassword]=useState('');
    const h = (e)=>{
        e.preventDefault();
        axios.post(API,{NAME:name})
        setName('')
        setpassword('')
    }

    const [names,setname1]=useState([])
   useEffect(()=>{
    axios.get(API).then((t)=>{
        console.log(t.data);
        setname1(t.data)
    })
   },[])
   //delete

   const del = (a)=>{
            axios.delete(`${API}/${a}`).then(()=>{
                axios.get(API).then((t)=>{
                     setname1(t.data)
                })
            })
   }
  


    return(
    <>
    <div> <p className="fs-1 font-monospace fw-bolder text-danger d-flex justify-content-center bg-dark container ">Login Form</p></div>
    <div className="container bg-danger">
    
    <div className="d-flex justify-content-center"> 
    <div className="d-flex align-items-center">
        <img src={'https://i.pinimg.com/originals/42/36/d0/4236d00b6df31c5c1dab3566fa61ff3c.gif'} alt='no imag' width={600} height={394} ></img>
    </div> 
   
   
   
    <div className="d-flex justify-content-center bg-dark m-3 p-5 w-100">
    <form onSubmit={h} >

    <div className="d-flex justify-content-center">
          <h1 className="text-danger fw-25 p-3 ">WELCOME BACK</h1>
    </div>
     
      <input type="text" id="name" className="form-control p-2 w-100" placeholder=" ENTER YOUR NAME" required  value={name}  onChange={(e)=>setName(e.target.value)}/>
      <br></br>
      
      <input type="password" id="email"  className="form-control p-2 w-100" placeholder=" ENTER YOUR PASSWORD" required  value={password}  onChange={(e)=>setpassword(e.target.value)} />
    
      <br></br>
      
      <div className="d-flex justify-content-center p-3">
      <button className="btn btn-primary m-1" type="submit">login</button>
      <button className="btn btn-primary m-1" type="button">Sign up</button>
      </div>

      </form> 

    </div>
    
    </div>
    <table>
       {names.map((t)=>(
        <tr>
            <td><h1>{t.NAME}</h1></td>
            <button onClick={()=>del(t.id)}>Delete</button>
        </tr>
       ))}
        
    </table>
    </div>
    </>   
    );
}