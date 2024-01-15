import React, { useState } from 'react';
import '../Question2/styles/Question2.css';






// Javascript

const CallbackFunctionExample = () => {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState('');

  const manipulateString = (callback) => {
    if (callback && inputString) {
      const manipulatedString = callback(inputString);
      setResult(manipulatedString);
    }
  };

  const invertString = (str) => {
    return str ? str.split('').reverse().join('') : '';
  };

  const scrambleString = (str) => {
    return str ? str.split('').sort(() => Math.random() - 0.5).join('') : '';
  };

  return (
    <div>
      <h1>Callback functions</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter your string"
      />
      <div>
        <button onClick={() => manipulateString(invertString)}>Invert</button>
        <button onClick={() => manipulateString(scrambleString)}>Scramble</button>
      </div>
      <div>
        {result && <p>Result: {result}</p>}
      </div>
    </div>
  );
};





// React
const JSXExample = () => {
  return (
    <div>
      <h1>JSX</h1>
      <h3>JSX is Javascript XML, and it lets you use XML-like tags in javascript</h3>
      Jsx lets you encase things in {"<>"}

      <p>JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.</p>
        <p>HTML is different since it firstly is case-sensitive and also </p>
    </div>
  );
}




// Security/Routing/Styling
const FlexboxGridExample = () => {
  const [useFlexbox, setUseFlexbox] = useState(true);
  const [spacing, setSpacing] = useState(10);

  const toggleLayout = () => {
    setUseFlexbox(prev => !prev);
  };

  const handleSpacingChange = event => {
    setSpacing(parseInt(event.target.value, 10));
  };

  return (
    <div className="container">
      <h1>{useFlexbox ? 'Flexbox Layout' : 'CSS Grid Layout'}</h1>
      <div className={`item-container ${useFlexbox ? 'flex-container' : 'grid-container'}`} style={{ gap: `${spacing}px` }}>
        {[1, 2, 3, 4].map(item => (
          <div key={item} className="item">{`Box ${item}`}</div>
        ))}
      </div>
      <div className="controls">
        <button onClick={toggleLayout}>
          Switch to {useFlexbox ? 'Grid' : 'Flexbox'}
        </button>
        <label htmlFor="spacingSlider">Adjust Spacing:</label>
        <input
          type="range"
          id="spacingSlider"
          min="0"
          max="100"
          step="5"
          value={spacing}
          onChange={handleSpacingChange}
        />
        <span>{spacing}px</span>
      </div>
    </div>
  );
};

export { CallbackFunctionExample, JSXExample, FlexboxGridExample };
