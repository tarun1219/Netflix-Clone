import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
export default function App() {
  return ( 
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/browse" element={<Netflix />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
