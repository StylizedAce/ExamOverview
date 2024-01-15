// Question1.jsx

import React, { useState } from 'react';
import Comp2 from './ReactComponents/Comp2';

// Javascript
const HigherOrderFunctionExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const filterNumbers = (predicate) => {
    return numbers.filter(predicate);
  };

  // Example higher-order functions
  const evenNumbers = filterNumbers((num) => num % 2 === 0);
  const oddNumbers = filterNumbers((num) => num % 2 !== 0);

  return (
    <div>
      <h1>Higher Order Function Example</h1>
      <p>Original Numbers: {numbers.join(', ')}</p>
      <p>Even Numbers: {evenNumbers.join(', ')}</p>
      <p>Odd Numbers: {oddNumbers.join(', ')}</p>
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
