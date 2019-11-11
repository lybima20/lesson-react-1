import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const buttonText = "learn";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text = {buttonText} />


          {/* React.Fragment:
          <>
            <p>1</p>
            <p>2</p>
            </> */}
        </a>
      </header>
    </div>
  );
}

export default App;
