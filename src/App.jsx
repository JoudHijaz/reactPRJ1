import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <>
    <Sidebar />
    <Navbar/>
    <Home/>
    </>
      
  );
}

export default App
