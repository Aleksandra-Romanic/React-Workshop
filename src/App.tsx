import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { ToastContainer } from 'react-toastify';
import About from './pages/About';
import { AppBarBar } from './components/AppBarBar';

function App() {
  return (
    <div className='App'>
      <AppBarBar/>
    <header className='App-header'>
      {/*<Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
      </Routes>*/}
    </header>
    <ToastContainer autoClose={1000} closeOnClick theme='dark' />
  </div>
  );
}

export default App;
