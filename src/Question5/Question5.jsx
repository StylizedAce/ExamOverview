import React, { useState } from 'react';

const SyncAsync = () => {
  const [operationResult, setOperationResult] = useState('');

  const runSynchronousOperation = () => {
    setOperationResult('Running synchronous operation...');
    
    // Simulate a time-consuming synchronous operation
    for (let i = 0; i < 1000000000; i++) {
      // Perform some computation
    }

    setOperationResult('Synchronous operation complete!');
  };

  const runAsynchronousOperation = () => {
    setOperationResult('Running asynchronous operation...');

    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      setOperationResult('Asynchronous operation complete!');
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  };

  return (
    <div>
      <h2>SyncAsync Example</h2>
      <button onClick={runSynchronousOperation}>Run Synchronous Operation</button>
      <button onClick={runAsynchronousOperation}>Run Asynchronous Operation</button>
      <div>
        <h2>Operation Result:</h2> {operationResult}
      </div>
    </div>
  );
};


const ConditionRenderingExample = () => {

    return (
        <div>
            <h1>Condition Rendering</h1>
            <h2>Look at the navbar, it has a toggle system with an onhover event. It conditionally shows a dropdown depending on if the dropdown is true or not</h2>
            <a>Navbar.jsx</a>
        </div>
    );
}


const TernaryOperatorExample = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
  
    return (
      <div>
        <h2>Ternary Operator Example</h2>
        <button onClick={handleToggle}>{isToggled ? 'Hide' : 'Show'}</button>
        {isToggled && <p>Toggle me</p>}
      </div>
    );
  }


const JWTDemonstration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = () => {
    // Simulate authentication without actual hashing
    if (username === 'Ace' && password === 'Hejhej123') {
      // Simulate successful authentication with a fake JWT token
      const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJteVVzZXIiLCJuYW1lIjoiQWNlIiwiZXhhbSI6InBhc3NlZCJ9.PCvCzJLy6CcN9AoYeu1OMuo4Fqp27iwIC-ntwUW-q80';
      setToken(fakeToken);
    } else {
      alert('Authentication failed. Please check your credentials.');
    }
  };
  

  return (
    <div>
      {token ? (
        <div>
          <h2>Welcome!</h2>
          <p>Your JWT token: {token}</p>
          <a href='https://jwt.io' target='_blank' rel="noreferrer"> Try decoding this</a>
        </div>
      ) : (
        <div>
          <h2>Login Page</h2>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export {SyncAsync, ConditionRenderingExample, TernaryOperatorExample, JWTDemonstration};
