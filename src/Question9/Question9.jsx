import React, { useRef, useState } from "react";


const VariableScopes = () => {
    
    
    return (
        <>
            <h1>VariableScopes</h1>
        </>
    );

    }

    const ControlledUncontrolledExample = () => {
        // Controlled component state
        const [controlledInput, setControlledInput] = useState('');
      
        // Text checkers for controlled and uncontrolled components
        const [controlledTextCheckers, setControlledTextCheckers] = useState({
          hasSpecialCharacter: false,
          isEightCharactersLong: false,
          hasNumber: false,
        });
      
        // Update text checkers for controlled and uncontrolled components based on the input value
        const updateTextCheckers = (value, isControlled = true) => {
          const textCheckers = {
            hasSpecialCharacter: /[!@#$%^&*(),.?":{}|<>]/.test(value),
            isEightCharactersLong: value.length >= 8,
            hasNumber: /\d/.test(value),
          };
      
          if (isControlled) {
            setControlledTextCheckers(textCheckers);
          } else {
            setUncontrolledTextCheckers(textCheckers);
          }
        };
      
        // Event handler for controlled input
        const handleControlledInputChange = (event) => {
          const value = event.target.value;
          setControlledInput(value);
          updateTextCheckers(value);
        };
      
        // Uncontrolled component reference and state
        const uncontrolledInputRef = useRef('');
        const [uncontrolledTextCheckers, setUncontrolledTextCheckers] = useState({
          hasSpecialCharacter: false,
          isEightCharactersLong: false,
          hasNumber: false,
        });
      
        // Update text checkers for uncontrolled component based on the input value
        const updateTextCheckersUncontrolled = () => {
          const value = uncontrolledInputRef.current.value;
          updateTextCheckers(value, false);
        };
      
        return (
          <div>
            <h2>Controlled Component</h2>
            {/* Controlled input field */}
            <input type="text" value={controlledInput} onChange={handleControlledInputChange} />
            <p>Controlled Value: <strong>{controlledInput}</strong></p>
      
            {/* Text checkers for controlled component */}
            {Object.entries(controlledTextCheckers).map(([label, isMet]) => (
              <p key={label}>{label.charAt(0).toUpperCase() + label.slice(1)}: {isMet ? '✅' : '❌'}</p>
            ))}
      
            <h2>Uncontrolled Component</h2>
            {/* Uncontrolled input field with ref */}
            <input type="text" ref={uncontrolledInputRef} />
      
            {/* Button for uncontrolled input */}
            <button onClick={updateTextCheckersUncontrolled}>
              Get Uncontrolled Value and Check
            </button>
      
            {/* Text checkers for uncontrolled component */}
            {Object.entries(uncontrolledTextCheckers).map(([label, isMet]) => (
              <p key={label}>{label.charAt(0).toUpperCase() + label.slice(1)}: {isMet ? '✅' : '❌'}</p>
            ))}
      
            {/* Display uncontrolled input value */}
            <p>Uncontrolled Value: {uncontrolledInputRef.current.value}</p>
      
            <div>
              <p>
                <strong>Controlled Component:</strong> The input value is controlled
                by React state. Changes are handled through the{' '}
                <code>onChange</code> event.
              </p>
              <p>
                <strong>Uncontrolled Component:</strong> The input value is not
                directly controlled by React state. The <code>ref</code> is used to
                access the input value when needed.
              </p>
              <p>
                <strong>Text Checkers:</strong> Additional checks for the input
                value. Indicators show whether the input meets specific conditions.
              </p>
            </div>
          </div>
        );
      };
      


      export {VariableScopes, ControlledUncontrolledExample}