import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./Clock"
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Clock></Clock>
          <Button name="出勤"></Button>
      </header>
    </div>
  );
}

export default App;
