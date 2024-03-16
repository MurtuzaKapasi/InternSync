// PDFUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'; // Update with your server's URL

function PDFUpload() {
  const [text, setText] = useState('');

  const handleFileUpload = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('resume', file); // Ensure the correct field name is used
      console.log('file uploadded' , file);
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
  
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <br />
      <textarea value={text} readOnly cols="30" rows="10"></textarea>
    </div>
  );
}

export default PDFUpload;
