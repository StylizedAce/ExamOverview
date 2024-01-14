// Question3.jsx

import React from 'react';

// Javascript
const PackageFilesExplanation = () => {
  return (
    <div>
      <h1>package.json and package-lock.json</h1>
      <p> package.json is a manifest file that holds metadata about the project and lists dependencies.</p>
      <p> package-lock.json records the exact version of each installed package and ensures consistent installations across different environments.</p>
    </div>
  );
}

// React
const PropsAndStateExplanation = () => {
  return (
    <div>
      <h1>Props and State in React</h1>
      <p>Props (short for properties) are used to pass data from a parent component to a child component in React.</p>
        <p> Show DnDApp</p>
    </div>
  );
}

// Security/Routing/Styling
const DeployReactAppExample = () => {
  return (
    <div>
      <h1>Deploying React App to Docker</h1>
      <p>Conceptually describe how to deploy a React frontend application to a Docker container on a virtual machine.</p>
    </div>
  );
}

export { PackageFilesExplanation, PropsAndStateExplanation, DeployReactAppExample };
