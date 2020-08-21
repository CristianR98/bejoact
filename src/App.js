import React from 'react';
import './App.css';
import Home from './components/Home';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <div className="main-container">
      <MainNavbar/>
      <Home greeting="Bienvenido a Bejoact!" subtitle="Agrega al carrito y compra los productos que mas te gusten." />
    </div>
  );
}

export default App;
