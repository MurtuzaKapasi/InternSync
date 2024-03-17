import React, { useState } from 'react';

const PostJob = () => {
  // Form state
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    skills: '',
    experience: '',
    education: '',
    salary: '',
    location: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend
    console.log(formData);
    // Reset form fields
    setFormData({
      company: '',
      title: '',
      description: '',
      skills: '',
      experience: '',
      education: '',
      salary: '',
      location: ''
    });
  };

  return (
      <div className='flex justify-center items-center'>
        <div className='max-w-md w-full pt-10 pb-5'>
          <h2 className='text-2xl font-bold mb-5 text-center'>Post a Job</h2>
          <form onSubmit={handleSubmit} className='rounded-xl shadow-2xl bg-[#ececec] pt-10 pl-10 pr-10 pb-5'>
            {/* Company */}
            <div className='mb-4'>
              <label htmlFor='company' className='block text-gray-700 font-bold mb-2'>Company</label>
              <input type='text' id='company' name='company' value={formData.company} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Title */}
            <div className='mb-4'>
              <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>Title</label>
              <input type='text' id='title' name='title' value={formData.title} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Description */}
            <div className='mb-4'>
              <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>Description</label>
              <textarea id='description' name='description' value={formData.description} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 h-40 resize-none' required />
            </div>
            {/* Skills */}
            <div className='mb-4'>
              <label htmlFor='skills' className='block text-gray-700 font-bold mb-2'>Skills (comma-separated)</label>
              <input type='text' id='skills' name='skills' value={formData.skills} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Experience */}
            <div className='mb-4'>
              <label htmlFor='experience' className='block text-gray-700 font-bold mb-2'>Experience</label>
              <input type='text' id='experience' name='experience' value={formData.experience} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Education */}
            <div className='mb-4'>
              <label htmlFor='education' className='block text-gray-700 font-bold mb-2'>Education</label>
              <input type='text' id='education' name='education' value={formData.education} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Salary */}
            <div className='mb-4'>
              <label htmlFor='salary' className='block text-gray-700 font-bold mb-2'>Salary</label>
              <input type='number' id='salary' name='salary' value={formData.salary} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Location */}
            <div className='mb-4'>
              <label htmlFor='location' className='block text-gray-700 font-bold mb-2'>Location</label>
              <input type='text' id='location' name='location' value={formData.location} onChange={handleChange} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' required />
            </div>
            {/* Submit button */}
            <div className='flex justify-center items-center'>
              <button type='submit' className='bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300'>Post Job</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default PostJob;
