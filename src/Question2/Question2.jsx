import React, { useState } from 'react';
import '../Question2/styles/Question2.css';






// Javascript
const CallbackFunctionExample = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Callback Function Example</h1>
      <p>Button Click Count: {clickCount}</p>
      <button onClick={handleButtonClick}>Click me</button>
      <p>
        A callbackfunction is a function that takes another function as an arguement.
        You can often associate the term with async-functions as they often take a callback function as an arguement.
      </p>
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
