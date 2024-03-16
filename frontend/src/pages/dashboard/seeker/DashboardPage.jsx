import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const DashboardPage = () => {
  const [user, setUser] = useState("user"); // user data
  const [recruiterdata, setrecruiterData] = useState([]); // recruiter data

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/user');
      setUser(response.data.data.name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  const fetchrecruiterData = async () => {
    try {
      const response = await axios.get('/api/allrecruiters');
      setrecruiterData(response.data.recruiterData);
    } catch (error) {
      console.error("Error fetching recruiter data:", error);
    }
  }

  const handleLogout = async () => {
    console.log("Logging out");
    try {
      const response = await axios.get('/api/logout');
      if (response.status === 200) {
        console.log("Logged out successfully");
        window.location.href = '/signin'; // Redirecting manually
      } else {
        console.error("Error logging out:", response);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchrecruiterData();
  }, []);

  return (
    <div className='h-screen w-screen bg-white p-5 flex flex-col overflow-x-hidden'>
      {/* navbar */}
      <div className="w-full h-28 rounded-2xl shadow-2xl bg-zinc-800 text-white pl-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 border-2 border-white">
            {/* Placeholder for Avatar */}
          </div>
          <h1 className='text-xl'>
            {user}
          </h1>
        </div>
        <div className='flex gap-8 ml-auto'>
          {/* Filter icon */}
          <button className='flex gap-4'>
            {/* Placeholder for Filter icon */}
          </button>

          {/* msg icon */}
          <a href="/chat">
            {/* Placeholder for Message icon */}
          </a>

          {/* Logout icon */}
          <button className='flex gap-2 items-center mr-4' onClick={handleLogout}>
            {/* Placeholder for Logout icon */}
            Logout
          </button>
        </div>
      </div>

      <div className='p-5 w-full h-auto flex gap-20'>
        <h1 className='font-bold text-3xl'>Recruiters <span className='text-violet-500'>{recruiterdata.length}</span></h1>
      </div>
      
      <div className='w-full h-auto'>
        {/* displaying recruiter cards */}
        <div className='flex flex-wrap w-auto h-auto'>
          {recruiterdata.map((recruiter, index) => (
            <Card 
              recruiterData={{
                id: recruiter.user._id,
                name: recruiter.user.name,
                role: recruiter.roles,
                phone: recruiter.user.mobile,
                email: recruiter.user.email,
              }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;