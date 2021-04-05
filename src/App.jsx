import React, { useState } from 'react';
import Firstclick from './Left';
import Right from './Right';
// import {Route, Switch  } from "react-router-dom";




const App =() =>{
    return (
    <>
      <div className="fullweg">
      <Firstclick />
      <Right />
      </div>
  </>
  );
}


export default App;