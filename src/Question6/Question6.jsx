import React, { useState, useEffect } from 'react';
import Comp2 from '../Question1/ReactComponents/Comp2';
import Welcome from '../Welcome';

const Storage = () => {
    return (
        <div>
            <h1>Storage</h1>
        </div>
    )
}



const UseEffectExample = () => {
   
  
    return (
      <div>
        <h1> UseEffect</h1>
        <h3> Features.jsx: DnD application and show how useEffect in stats is triggered by features</h3>
      </div>
      );
};

const SPA = () => {

    return (
        <div>
            <h1>SPA</h1>
            <Comp2/>
            <Welcome/>
        </div>
    )
}


export {Storage, UseEffectExample, SPA}