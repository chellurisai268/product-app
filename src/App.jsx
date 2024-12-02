import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
