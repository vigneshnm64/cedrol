import React,{useState} from "react";
import styles from "../Styles/componentA.css";
import ComponentB from "./ComponentB";
const ComponentA = () => {
   const [count,setcount]=useState(1) 
   const [cendol,setcendol]=useState(2)
   const [toggle,settoggle]=useState(true)
  return (
    <div>
  {/*assigment1 start*/} 
      <div className="box">
        <div className={count > 1 ? "greencircle":"circle"}>
          <h5>{count}</h5>
          <div style={{ marginTop: "5px" }}>
            <p onClick={()=>setcount(counts=>counts+1)}>
              <u>Click to increase counter</u>
            </p>
          </div>
        </div>
      </div>
      <div className="squarebuttondiv">
        <button className="squarebutton">Change Colour</button>
      </div>
      {/*assigment1 End*/} 
      <div>
      {/*assigment2 start*/}
      <ComponentB cendol={cendol} setcendol={setcendol}/>
     </div>
      {/*assigment2 end*/}
      <div>
       {/*assigment3 start*/}
       <div className="toggle">
        <button onClick={()=>settoggle(!toggle)} className={toggle ? "Redbutton":"Bluebutton"}>{toggle ? "true":"false"}</button>
      </div>
      </div>
    </div>
    
  );
};

export default ComponentA;
