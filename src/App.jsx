// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import { HigherOrderFunctionExample, ReactComponentExample, ReactRouterExample } from './Question1/Question1';
import { CallbackFunctionExample, FlexboxGridExample, JSXExample } from './Question2/Question2';
import { DeployReactAppExample, PackageFilesExplanation, PropsAndStateExplanation } from './Question3/Question3';
import { PromisesExample, ResponsiveDesignPrinciples } from './Question4/Question4';
import Welcome from './Welcome';
import {SyncAsync, ConditionRenderingExample, TernaryOperatorExample, JWTDemonstration } from './Question5/Question5';
import  { UseEffectExample, Storage, SPA } from './Question6/Question6';
import { FormSubmitEvents, WindowObject } from './Question7/Question7';



const App = () => {
  
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Outlet/>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/higher-order-functions" element={<HigherOrderFunctionExample />} />
            <Route path="/jsx-and-components" element={<ReactComponentExample />} />
            <Route path="/react-router" element={<ReactRouterExample/>} />
            <Route path="/callback-function" element={<CallbackFunctionExample/>} />
            <Route path="/jsx-example" element={<JSXExample/>} />
            <Route path="/Flexgrid-box" element={<FlexboxGridExample/>} />
            <Route path="/package-files" element={<PackageFilesExplanation/>} />
            <Route path="/props-and-state" element={<PropsAndStateExplanation/>} />
            <Route path="/deploy-react-app" element={<DeployReactAppExample/>} />
            <Route path="/promises" element={<PromisesExample/>} />
            <Route path="/responsiveness" element={<ResponsiveDesignPrinciples/>} />
            <Route path="/sync-async" element={<SyncAsync/>} />
            <Route path="/conditional-rendering" element={<ConditionRenderingExample/>} />
            <Route path="/ternary-operator" element={<TernaryOperatorExample/>} />
            <Route path="/jwt-demo" element={<JWTDemonstration/>} />
            <Route path="/storage" element={<Storage/>} />
            <Route path="/useeffect" element={<UseEffectExample/>} />
            <Route path="/spa" element={<SPA/>} />
            <Route path="/window" element={<WindowObject/>} />
            <Route path="/events" element={<FormSubmitEvents/>} />


            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
