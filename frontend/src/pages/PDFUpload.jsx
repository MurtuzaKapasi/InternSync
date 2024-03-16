import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'; // Update with your server's URL

function PDFUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [portfolio, setPortfolio] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');

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

  const handleAvatarUpload = (event) => {
    const uploadedAvatar = event.target.files[0];
    setAvatar(uploadedAvatar);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, you can send all the form data to your backend API
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('password', password);
    formData.append('bio', bio);
    formData.append('avatar', avatar);
    formData.append('portfolio', portfolio);
    formData.append('githubLink', githubLink);
    formData.append('linkedInLink', linkedInLink);

    console.log('Form submitted successfully', formData);
    // Example: Sending formData to backend API using fetch
    fetch('your-backend-api-url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        // Handle server response as needed
      })
      .catch((error) => {
        console.error('Error uploading resume:', error);
        // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-100 max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700 font-semibold mb-1">Upload Resume:</label>
        <input type="file" id="resume" onChange={handleFileUpload} accept=".pdf,.doc,.docx" required className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-semibold mb-1">Bio:</label>
        <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="avatar" className="block text-gray-700 font-semibold mb-1">Upload Avatar:</label>
        <input type="file" id="avatar" onChange={handleAvatarUpload} accept="image/*" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="portfolio" className="block text-gray-700 font-semibold mb-1">Portfolio:</label>
        <input type="text" id="portfolio" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="githubLink" className="block text-gray-700 font-semibold mb-1">GitHub Link:</label>
        <input type="url" id="githubLink" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="linkedInLink" className="block text-gray-700 font-semibold mb-1">LinkedIn Link:</label>
        <input type="url" id="linkedInLink" value={linkedInLink} onChange={(e) => setLinkedInLink(e.target.value)} className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300">Submit</button>
    </form>
  );
}

export default PDFUpload;