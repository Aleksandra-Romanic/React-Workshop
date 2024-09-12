import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </header>
    <ToastContainer autoClose={1000} closeOnClick theme='dark' />
  </div>
  );
}

export default App;
