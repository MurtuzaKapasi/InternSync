import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import Register from './pages/register/Register';
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';

function App() {

  return (
    <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
