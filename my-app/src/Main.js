import K7file from "./K7file";
import Buttonop from "./Buttonop";
import React from "./React";
import Namechangewhileclick from "./Namechangewhileclick";
import Rcolor from "./Rcolor";
import Calcfn from "./Calcfn";
import Image from "./Image";
import Clickimage from "./Clickimage";
import Calculator from "./Calculator";
import Form from "./Form";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

// import Registerform from "./Registerform";
//import ImageChanger from "./Imagechanger";

// import Clickconsole from "./Clickconsole";
// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
// import Page4 from "./Page4";
// import Page5 from "./Page5";
// import Bu123 from "./Bu123";
// import Lastbu from "./Lastbu";

export default function Main() {
  
return(
    <div>
    <div className="container-fluid">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    
    <div className="d-flex justify-content-between">
    <div><K7file></K7file></div>
    <div><Buttonop></Buttonop></div>
    </div>

    {/* <div><Bu123></Bu123></div><br></br> */}

    <div><React></React></div>

   {/* <div><Page1></Page1></div>

    <div><Page2></Page2></div>

    <br></br>

    <div><Page3></Page3></div>

    <div><Page4></Page4></div>

    <div><Page5></Page5></div>  */}

   {/* <div><Lastbu></Lastbu></div> */}


   

    
    <div className="d-flex justify-content-around">
    <div><Calcfn></Calcfn></div>
    <div><Namechangewhileclick></Namechangewhileclick></div>
    <div><Rcolor></Rcolor></div>
    {/* <div><Clickconsole></Clickconsole></div> */}
    </div>

    <div><Image></Image></div>
    <div><Clickimage></Clickimage></div>
    {/* <div><ImageChanger></ImageChanger></div> */}
    {/* <div><Calculator></Calculator></div>
    <div><Form></Form></div> */}
    {/* <Registerform></Registerform> */}
    
     <BrowserRouter>
     
     <Routes>

        <Route path="/form" element={<Form></Form>} />
        <Route path="/cal" element={<Calculator></Calculator>}/>

     </Routes>
     
     
     </BrowserRouter>

    
    

    </div>
    </div>






);


}



