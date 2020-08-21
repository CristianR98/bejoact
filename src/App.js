import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <div>
      <MainNavbar/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Segundo desafio para CoderHouse completado!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
