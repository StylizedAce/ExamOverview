import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/nav.css';
import myImage from '../Navbar/home.png';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const questions = [
    { label: 'Question 1', routes: ['/higher-order-functions', '/jsx-and-components', '/react-router'] },
    { label: 'Question 2', routes: ['/callback-function', '/jsx-example', '/Flexgrid-box'] },
    { label: 'Question 3', routes: ['/package-files', '/props-and-state', '/deploy-react-app'] },
    { label: 'Question 4', routes: ['/promises', '/responsiveness'] },
    { label: 'Question 5', routes: ['/sync-async', '/conditional-rendering', '/ternary-operator', '/jwt-demo'] },
    { label: 'Question 6', routes: ['/storage', '/useeffect', '/spa'] },
    { label: 'Question 7', routes: ['/window', '/events', '/jwt-demo'] },
    { label: 'Question 8', routes: ['/event-bubbling', '/key-attribute', '/map-function'] },
    { label: 'Question 9', routes: ['/scopes', '/controlled-uncontrolled'] },
    { label: 'Question 10', routes: ['/operators', '/useStateeffect', '/error', '/cors'] },
    { label: 'Question 11', routes: [] },
    { label: 'Question 12', routes: [] },
    { label: 'Question 13', routes: [] },
  ];

  const allEndpoints = questions.reduce((endpoints, question) => {
    return [...endpoints, ...question.routes];
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <nav>
        <ul className='ul'>
          {questions.map((question, index) => (
            <li key={index} className='li' onMouseEnter={() => toggleDropdown(index)} onMouseLeave={() => toggleDropdown(index)}>
              <NavLink to="#">{question.label}</NavLink>
              {activeDropdown === index && (
                <ul className="dropdown">
                  {question.routes.map((route, subIndex) => (
                    <li key={subIndex}><NavLink to={route}>{route.substring(1)}</NavLink></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="li">
            <button onClick={toggleSearch}>Search</button>
            <br/>
            {isSearchOpen && (
              <NavLink to={searchQuery}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onClick={(event) => event.target.value = ''}
                  list="endpointOptions"
                  placeholder="Search endpoint"
                />
                <datalist id="endpointOptions">
                  {allEndpoints.map((option, index) => (
                    <option key={index} value={option} />
                  ))}
                </datalist>
                <input type="submit" value="Go" />
              </NavLink>
            )}
          </li>
          <NavLink to={"/"}>
            <input id='img' type='submit' hidden  />
            <img src={myImage} style={{width: "35px", height: "30px"}} alt="avatar" className="avatar" />
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
