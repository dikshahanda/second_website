import React, { useState } from 'react';
 import Firstclick from './Left';
 import Right from './Right';

// let TIME=new Date().toLocaleTimeString();


const Slider =() =>{
    // const state = useState();
    const [count,setCount] = useState({
        name:'Diksha',
        btn:"View CV"
    });
    const [name,setname] = useState('Diksha');
    const [btn,setbtn] = useState('View CV');


    const r = () =>{
    //   TIME=new Date().toLocaleTimeString();
    setname('handa')
    setbtn('viwe blog'); 
    }
    
setInterval(r,100);
    return (
    <>
    <div className="ttxtcen">
    <h1 className="numb">{count.name}</h1>
    <h2>{count.btn}</h2>
    {/* <button className="btn" onClick={r}>Press Me</button> */}
    </div>
  </>
  );
}


export default Slider;