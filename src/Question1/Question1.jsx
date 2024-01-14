// Question1.jsx

import React, { useState } from 'react';
import Comp2 from './ReactComponents/Comp2';

// Javascript
const HigherOrderFunctionExample = () => {

  const [customText, setCustomText] = useState('customText');

  const handleClickGenerator = (message) => {
    return () => {
      alert(message);
    };
  };

  const handleClickHello = handleClickGenerator('Hello, World!');
  const handleClickGoodbye = handleClickGenerator('Goodbye!');
 
  function handleClickCustomTextChange(event) {
    setCustomText(event.target.value);
  }
  
  const handleClickCustomText = handleClickGenerator(customText);

  return (
    <div>
      <h1>Higher order example</h1>
      <h3>Higher order functions are functions that take other functions as arguments or return functions as their results.</h3>
      <button onClick={handleClickHello}>Say Hello</button>
      <button onClick={handleClickGoodbye}>Say Goodbye</button>
      <input type="text" placeholder="Type something" id='customText' onChange={handleClickCustomTextChange}/>
      <button onClick={handleClickCustomText}>Say customtext</button>


    </div>
  );
};

// React
const ReactComponentExample = () => {
  return (
    <div>
      <h2>React Components</h2>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Modularity</li>
        <li>Reusability</li>
        <li>Maintainability</li>
      </ul>
      <h4>Below you will see how i can package code/ui into smaller reusable objects/components</h4>
      <Comp2/>
    </div>
  );
}

// Security/Routing/Styling
const ReactRouterExample = () => {
  return (
    <div>
      <h2>React Router</h2>
      <p>Show app.jsx</p>
    </div>
  );
}

export { HigherOrderFunctionExample, ReactComponentExample, ReactRouterExample };
