import { useState } from 'react'
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage'
import Intern from './pages/dashboard/Intern/Intern';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecruiterCard from './pages/dashboard/Intern/RecruiterCard';
import PDFUpload from './pages/PDFUpload';
import MultiStepForm from './pages/register/MultiStepForm';
import Recruiter from './pages/dashboard/Recruiter/Recruiter';
import InternCard from './pages/dashboard/Recruiter/InternCard';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/intern' element={<Intern />} />
        <Route path="/recruiter/:id" element={<RecruiterCard />} />
        <Route path="/register" element={<Register />} />
        <Route path='recruiter' element={<Recruiter/>} />
        <Route path='intern/:id' element={<InternCard />} />
        <Route path="/multiregister" element={<MultiStepForm />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path='/internReg' element={<PDFUpload />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
