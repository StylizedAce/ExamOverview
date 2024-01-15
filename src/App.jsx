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
import { EventBubbling, KeyAttribute, MapFunction } from './Question8/Question8';
import { ControlledUncontrolledExample, VariableScopes } from './Question9/Question9';
import { CorsExplain, ErrorExample, JSOperators, UseEffectState } from './Question10/Question10';



const App = () => {
  
  return (
    <Router>
      <div className="app-container">
        <header>
        <Navbar />
        </header>
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
            <Route path="/event-bubbling" element={<EventBubbling/>} />
            <Route path="/key-attribute" element={<KeyAttribute/>} />
            <Route path="/map-function" element={<MapFunction/>} />
            <Route path="/scopes" element={<VariableScopes/>} />
            <Route path="/controlled-uncontrolled" element={<ControlledUncontrolledExample/>} />
            <Route path="/operators" element={<JSOperators/>} />
            <Route path="/useStateEffect" element={<UseEffectState/>} />
            <Route path="/error" element={<ErrorExample/>} />
            <Route path="/cors" element={<CorsExplain/>} />


            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
