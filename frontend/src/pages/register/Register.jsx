import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ()=> {
  const navigate = useNavigate();
  const handleInternRegister = () => {
    navigate('/internReg');
  }

  const handleRecruiterRegister = () => {
    navigate('/recruiter');
  }

    return (
      <div className=" p-4">

        <div className="bg-[#ececec] h-[95vh] flex flex-col lg:flex-row justify-center items-center rounded-xl shadow-md shadow-zinc-500">
          <div className="lg:w-1/2 flex flex-col justify-center items-center border-r lg:border-10 border-gray-500 pr-4 lg:pr-0">
            <img
              src="./assets/seeker_img.svg"
              alt="Job Seeker"
              className="w-80 h-80 mb-4"
            />
            <h1 className="text-2xl font-semibold mb-2">Register as Job Seeker</h1><br/>
            <p className="text-gray-600 mb-8 ml-10 mr-10 text-center">Join our platform as a job seeker to discover new opportunities and connect with recruiters.</p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300" onClick={handleInternRegister}>Register</button>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center pl-4 lg:pl-0">
            <img
              src="./assets/mentor_img.svg"
              alt="Recruiter"
              className="w-80 h-80 mb-4"
            />
            <h1 className="text-2xl font-semibold mb-2">Register as Recruiter</h1><br/>
            <p className="text-gray-600 mb-8 ml-10 mr-10 text-center">Join our platform as a recruiter to post jobs, manage applicants, and streamline your hiring process.</p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300" onClick={handleRecruiterRegister}>Register</button>
          </div>
        </div>
        </div>

      );
}

export default Register;