import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import MainNavbar from './components/MainNavbar/MainNavbar';

function App() {
  return (
    <div className="main-container">
      <MainNavbar/>
      <Home greeting="Bienvenido a Bejoact!" subtitle="Agrega al carrito y compra los productos que mas te gusten." />
    </div>
  );
}

export default App;
