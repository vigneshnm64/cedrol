import React from 'react'
import styles from "../Styles/componentB.css"
const ComponentB = ({cendol,setcendol}) => {
    
  return (
    <div className='incrementer'>
      {cendol}
      <div>
        <button className='buttonb' onClick={() => setcendol((counts) => counts + 10)}>
          Incriment
        </button>
      </div>
    </div>
  );
}

export default ComponentB