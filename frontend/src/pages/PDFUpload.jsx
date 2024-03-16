// PDFUpload.jsx
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

    console.log('Form subbmitted successfully', formData);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resume">Upload Resume:</label>
        <input type="file" onChange={handleFileUpload} accept=".pdf,.doc,.docx" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="avatar">Upload Avatar:</label>
        <input type="file" id="avatar" onChange={handleAvatarUpload} accept="image/*" />
      </div>
      <div>
        <label htmlFor="portfolio">Portfolio:</label>
        <input type="text" id="portfolio" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
      </div>
      <div>
        <label htmlFor="githubLink">GitHub Link:</label>
        <input type="url" id="githubLink" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
      </div>
      <div>
        <label htmlFor="linkedInLink">LinkedIn Link:</label>
        <input type="url" id="linkedInLink" value={linkedInLink} onChange={(e) => setLinkedInLink(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PDFUpload;


