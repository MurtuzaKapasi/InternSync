import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage'
import Intern from './pages/dashboard/Intern/Intern';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecruiterCard from './pages/dashboard/Intern/RecruiterCard';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/intern' element={<Intern />} />
        <Route path="/intern/:id" element={<RecruiterCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Loginpage />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
