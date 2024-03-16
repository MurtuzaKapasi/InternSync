import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleGetStartedClick = () => {
    navigate('/multiregister');
  };

  return (
    <div className="bg-[#fbfbfb] min-h-screen flex flex-col lg:flex-row justify-center items-center relative">
      <button onClick={handleLoginClick} className="absolute top-0 right-0 mt-4 mr-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300">Login</button>
      
      <div className="max-w-4xl text-center lg:w-1/2 lg:mr-4">
        <h1 className="text-5xl mb-4 font-bold">Introducing InternSync</h1>
        <p className="text-lg text-gray-600 mb-8">Streamlining the Hiring Process for Recruiters and Job Seekers</p>
        <p className="text-gray-700 mb-6">Experience a faster, more transparent, and user-friendly hiring process with <br/> InternSync - join us in transforming recruitment today!</p>
        <button onClick={handleGetStartedClick} className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300">Get Started</button>
      </div>
      <div className="h-full w-1/2 lg:w-1/3 ml-2">
        <img
          src="./assets/landing.svg"
          alt="mentorship"
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Homepage
