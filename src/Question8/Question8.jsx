import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const EventBubbling = () => {
  const [message, setMessage] = useState('I am ');

  const handleClick = (clickedElement) => {
    setMessage(`I am ${clickedElement}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        onClick={() => handleClick('Div')}
        style={{ backgroundColor: 'lightblue', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
      >
        Div
        <span
          onClick={(e) => {
            e.stopPropagation(); 
            handleClick('Span');
          }}
          style={{ backgroundColor: 'lightgreen', padding: '20px', marginLeft: '10px', cursor: 'pointer' }}
        >
          Span
          <button
            onClick={(e) =>  {
              e.stopPropagation();
              handleClick('Button')}}
            style={{ backgroundColor: 'lightcoral', marginLeft: '10px', cursor: 'pointer' }}
          >
            Click me
          </button>
        </span>
      </div>
      <h2 
      onClick={(e) => {
        handleClick('H2')
      }}
      >{message}</h2>
    </div>
  );
};

const KeyAttribute = () => {
  const initialList = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    text: `Item ${index + 1}`,
  }));

  const [list, setList] = useState(initialList);
  const [inputNumber, setInputNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState('');

  const renameItem = () => {
    const key = parseInt(inputNumber, 10);
    
    if (key === null || key < 1 || key > 10) {
      setMessage('Please enter a valid item number (1 to 10).');
      return;
    }

    const updatedList = list.map(item =>
      item.id === key ? { ...item, text: newName || `Item ${key}` } : item
    );

    setList(updatedList);
    setMessage(`Item with key ${key} has been renamed to ${newName || `Item ${key}`}.`);
  };

  return (
    <div>
      <h3>{message}</h3>
      <ul>
        {list.map(item => (
          <li style={{ listStylePosition: 'inside' }} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <label>
        Item Number:
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
      </label>
      <label>
        New Name:
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <button onClick={renameItem}>Rename Item</button>
    </div>
  );
};

const MapFunction = () => {

  return (

    <div>
      <h2>Map Function</h2>
      <h3>Map is a higher order function that takes a function as an argument and returns a new array with the result of calling the function on each element of the array.</h3>
      <NavLink to={"/key-attribute"}>

          <a>Click here to see an example and its code above</a>
      </NavLink>
    
      
    </div>
  );
        }

  export {EventBubbling, KeyAttribute, MapFunction}