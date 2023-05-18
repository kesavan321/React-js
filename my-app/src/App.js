// import { useNavigate } from "react-router-dom";
// import Main from "./Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rcolor from "./Rcolor";
import Calculator from "./Calculator";


// export default function App() {
// //   const navi = useNavigate();
// //   const f = ()=>{
// // navi('/form')
// //   }
//   return (
//    <>
//    <div>
//    <button  > form</button>
//    <Main></Main>
   
//    </div>
//    </>
//   );
// }


export default function App(){
  return(
    <>
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Rcolor></Rcolor>}/>
      <Route path="/form" element={<Calculator></Calculator>}/>


    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}
