import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { ToastContainer } from 'react-toastify';
import About from './pages/About';
import { AppBarBar } from './components/AppBarBar';
import { CardBook } from './components/CardBook';
import { Box, Stack } from '@mui/material';

import books from './books.json';
import Carousel from './components/Carousel';

function App() {
  return (
    < Box
    sx={{ height:'100vh', width:'100vw', backgroundColor:'white' ,margin:0, padding:0 }}>
       <AppBarBar/>
       <Carousel/>
    </Box>
   );
   
   
   /*<div className='App'>
      <AppBarBar/>
      <CardBook/>
    <header className='App-header'>
      {/*<Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </header>
    <ToastContainer autoClose={1000} closeOnClick theme='dark' />
  </div> */
}

export default App;
