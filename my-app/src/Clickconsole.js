
export default function Clickconsole() {
    const k =()=> {
        console.log('hello');
    }
  return (
   <>
<div>
    <button type="button" className="btn btn-info m-2" onClick={k} >Click-console</button>  
    <button type="button" className="btn btn-info m-2"  onClick={()=>console.log('hi')}>click1-console</button>
</div>
   
   </>
  );
}