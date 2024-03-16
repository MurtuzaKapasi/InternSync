import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/homepage/Homepage';
import Intern from './pages/dashboard/Intern/Intern';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecruiterCard from './pages/dashboard/Intern/RecruiterCard';
import Register from './pages/register/Register';
import Loginpage from './pages/loginpage/Loginpage';
import PDFUpload from './pages/PDFUpload';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/intern' element={<Intern />} />
        <Route path="/intern/:id" element={<RecruiterCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path='*' element={<Homepage />} />
        <Route path='/internReg' element={<PDFUpload />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
