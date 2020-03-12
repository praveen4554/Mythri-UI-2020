import React from 'react';
import logo from './logo.svg';
import StateFulComponent from './ClassComponent';
import { TestFunctionComponent } from './FunctionComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateFulComponent data="parentDataToClassComponent"></StateFulComponent>
        <TestFunctionComponent data="parentDataToFunctionalComponent"></TestFunctionComponent>
      </header>
    </div>
  );
}

export default App;
