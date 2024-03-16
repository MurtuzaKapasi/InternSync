import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
    mobile: '',
    bio: '',
    portfolio: '',
    linkedin: '',
    github: '',
    role: '',
    companyName: '',
    jobTitle: '',
    position: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('resume', file); // Ensure the correct field name is used
      console.log('file uploadded', file);
      const response = await axios.post('/upload', formData);
      setText(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to server or perform desired action
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='w-full min-h-screen flex shadow-md shadow-zinc-500 '>
            {/* form */}
            <div className=" bg-zinc-200   pt-6 w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
              <div className=' flex flex-col w-full items-center'>
                <label className="text-md text-left">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2  mb-2"
                />

                {/* Add other fields for user info */}
                <label className="text-md">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                />

                <label className="text-md">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                />

                <label className="text-md">Mobile:</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                />

                <label className="text-md">Bio:</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                ></textarea>

                <label className="text-md">Portfolio:</label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                />

                <label className="text-md">LinkedIn:</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                />

                <label className="text-md">Github:</label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                />

                <label className="text-md">Role:</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-1/2 mb-2"
                >
                  <option value="">Select Role</option>
                  <option value="applicant">Applicant</option>
                  <option value="recruiter">Recruiter</option>
                </select>

                <button
                  onClick={nextStep}
                  className="px-4 py-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
            {/* image */}
            <div className='bg-zinc-200  w-1/2 '>
              <img src="../../assets/seeker_img.svg" className=" mb-4" alt="" />
            </div>
          </div>

        );
      case 2:
        return (
          <div>
            {formData.role === 'applicant' ? (
              <>
                <div className='w-full max-h-full bg-zinc-200 flex shadow-md items-center shadow-zinc-500'>
                  <div className='bg-zinc-200  w-1/2 items-center justify-center'>
                    <h2 className='text-3xl font-semibold mb-4 ml-10'>Resume:</h2>
                    <input type="file" id="resume" onChange={handleFileUpload} accept=".pdf,.doc,.docx" required className="w-1/2 border-gray-300 border rounded-lg px-4 py-2 outline-zinc-600 ml-10 outline-dashed focus:border-gray-500" />
                    <div className='gap-3 flex mt-10 ml-10 '>
                      <button onClick={prevStep} className='bg-gray-500 hover:bg-gray-700  font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Back</button>
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                    </div>

                  </div>
                  <div className='bg-zinc-200  w-1/2 '>
                    <img src="../../assets/seeker_img.svg" className=" mb-4" alt="" />
                  </div>
                </div>


              </>
            ) : (
              <>
                <div className='w-full max-h-screen  flex shadow-md shadow-zinc-500'>
                  <div className='bg-zinc-200 pt-10 pl-10 w-1/2'>
                    <label className="block mb-2">Company Name:</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 mb-2  w-1/2" />

                    <label className="block mb-2">Job Title:</label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 mb-2 w-1/2" />

                    <label className="block mb-2">Position:</label>
                    <input type="text" name="position" value={formData.position} onChange={handleChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 mb-2 w-1/2" />

                    <div className='gap-3 flex mt-10 ml-10 '>
                      <button onClick={prevStep} className='bg-gray-500 hover:bg-gray-700  font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Back</button>
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                    </div>
                  </div>
                  <div className='bg-zinc-200  w-1/2 '>
                    <img src="../../assets/seeker_img.svg" className=" mb-4" alt="" />
                  </div>
                </div>
              </>
            )}
          </div>
        );
      // Add more cases for additional steps
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
      

    </form>
  );
}

export default MultiStepForm;
