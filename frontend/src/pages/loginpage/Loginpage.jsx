import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  console.log("Form data" , formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Login request
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log('Login response:', data);
  
      // Fetch user details
      const userResponse = await fetch('http://localhost:3000/api/user/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${data.token}` // Pass the JWT token received from login response
        }
      });
  
      const userData = await userResponse.json();
      console.log('User details:', userData);
  
      // Check user role and navigate accordingly
      if (userData.user.role === 'recruiter') {
        navigate('/recruiter')
      } else {
        navigate('/intern')
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center items-center">
      {/* form */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center pl-4 lg:pl-0 border-r lg:border-10 border-gray-500">
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" onChange={handleChange} />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-left text-gray-700 font-semibold mb-1">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" onChange={handleChange} />
            </div>
            <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300">Login</button>
          </form>
        </div>
      </div>

      {/* image */}
      <div className="lg:w-1/2 flex justify-center items-center border-r lg:border-r-0 border-gray-300 pr-4 lg:pr-0">
        <img
          src="../../assets/login.svg"
          alt="Login Image"
          className="w-2/3 h-auto"
        />
      </div>
    </div>
  );
}

export default Loginpage;
