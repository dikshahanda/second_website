import React, { useState } from 'react';


const Sliders = () =>{
    const [frstVl, scndVl ] = useState({
        name:'Diksha',
        btn:"View CV"
    });
    
    return (
        <>
        <h2>{frstVl.name}</h2>
        </>
        );
};


export default Sliders;