// Question4.jsx

import React, { useState } from 'react';

// Javascript
const PromisesExample = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
  
    const handleButtonClick = () => {
      setLoading(true);
  
      // Simulate an asynchronous operation using a promise and a timer
      const delay = 2000; // 2 seconds
      const messagePromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve('Promise resolved!'); // Simulated result after delay
        }, delay);
      });
  
      messagePromise
        .then((resolvedMessage) => {
          setResult(resolvedMessage);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    return (
        <div>
            <h2>Promise Example</h2>
            <p>Click the button to simulate an asynchronous operation using a promise:</p>
            <button onClick={handleButtonClick} disabled={loading}>
                {loading ? 'Loading...' : 'Simulate Async Operation'}
            </button>
            {result && (
                <p>
                    Result: {result}
                    <br />
                    Notice the conditional rendering on &quot;disabled and result at the bottom&quot;
                </p>
            )}
        </div>
    );
  };




// Security/Routing/Styling
const ResponsiveDesignPrinciples = () => {
  return (
    <div>
      <h2>Responsive Design Principles</h2>
      <p>Describe important design principles when developing a website that should work well on mobile, tablet, and desktop browsers.</p>
    </div>
  );
}



export { PromisesExample, ResponsiveDesignPrinciples };
